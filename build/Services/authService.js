"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const Config_1 = require("@/Config");
const exceptions_1 = require("@/Exceptions/exceptions");
const userModel_1 = tslib_1.__importDefault(require("@/Models/userModel"));
const util_1 = require("@/Utils/util");
class AuthendicateService {
    constructor() {
        this.users = userModel_1.default;
    }
    async signup(userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new exceptions_1.exceptions(400, "userData is empty");
        const findUser = await this.users.findOne({ email: userData.email });
        if (findUser)
            throw new exceptions_1.exceptions(409, `This email ${userData.email} already exists`);
        const hashedPassword = await (0, bcrypt_1.hash)(userData.password, 10);
        const createUserData = await this.users.create(Object.assign(Object.assign({}, userData), { password: hashedPassword }));
        return createUserData;
    }
    async login(userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new exceptions_1.exceptions(400, "userData is empty");
        const findUser = await this.users.findOne({ email: userData.email });
        if (!findUser)
            throw new exceptions_1.exceptions(409, `This email ${userData.email} was not found`);
        const isPasswordMatching = await (0, bcrypt_1.compare)(userData.password, findUser.password);
        if (!isPasswordMatching)
            throw new exceptions_1.exceptions(409, "Password is not matching");
        const tokenData = this.createToken(findUser);
        const cookie = this.createCookie(tokenData);
        return { cookie, findUser };
    }
    async logout(userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new exceptions_1.exceptions(400, "userData is empty");
        const findUser = await this.users.findOne({ email: userData.email, password: userData.password });
        if (!findUser)
            throw new exceptions_1.exceptions(409, `This email ${userData.email} was not found`);
        return findUser;
    }
    createToken(user) {
        const dataStoredInToken = { _id: user._id };
        const secretKey = Config_1.SECRET_KEY;
        const expiresIn = 60 * 60;
        return { expiresIn, token: (0, jsonwebtoken_1.sign)(dataStoredInToken, secretKey, { expiresIn }) };
    }
    createCookie(tokenData) {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
    }
}
exports.default = AuthendicateService;
//# sourceMappingURL=authService.js.map