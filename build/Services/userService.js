"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = require("bcrypt");
const exceptions_1 = require("@/Exceptions/exceptions");
const userModel_1 = tslib_1.__importDefault(require("@/Models/userModel"));
const util_1 = require("@/Utils/util");
class UserService {
    constructor() {
        this.users = userModel_1.default;
    }
    async findAllUser() {
        const users = await this.users.find();
        return users;
    }
    async findUserById(userId) {
        if ((0, util_1.isEmpty)(userId))
            throw new exceptions_1.exceptions(400, "UserId is empty");
        const findUser = await this.users.findOne({ _id: userId });
        if (!findUser)
            throw new exceptions_1.exceptions(409, "User doesn't exist");
        return findUser;
    }
    async createUser(userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new exceptions_1.exceptions(400, "userData is empty");
        const findUser = await this.users.findOne({ email: userData.email });
        if (findUser)
            throw new exceptions_1.exceptions(409, `This email ${userData.email} already exists`);
        const hashedPassword = await (0, bcrypt_1.hash)(userData.password, 10);
        const createUserData = await this.users.create(Object.assign(Object.assign({}, userData), { password: hashedPassword }));
        return createUserData;
    }
    async updateUser(userId, userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new exceptions_1.exceptions(400, "userData is empty");
        if (userData.email) {
            const findUser = await this.users.findOne({ email: userData.email });
            if (findUser && findUser._id != userId)
                throw new exceptions_1.exceptions(409, `This email ${userData.email} already exists`);
        }
        if (userData.password) {
            const hashedPassword = await (0, bcrypt_1.hash)(userData.password, 10);
            userData = Object.assign(Object.assign({}, userData), { password: hashedPassword });
        }
        const updateUserById = await this.users.findByIdAndUpdate(userId, { userData });
        if (!updateUserById)
            throw new exceptions_1.exceptions(409, "User doesn't exist");
        return updateUserById;
    }
    async deleteUser(userId) {
        const deleteUserById = await this.users.findByIdAndDelete(userId);
        if (!deleteUserById)
            throw new exceptions_1.exceptions(409, "User doesn't exist");
        return deleteUserById;
    }
}
exports.default = UserService;
//# sourceMappingURL=userService.js.map