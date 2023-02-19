import UserController from '@/Controllers/userController';
import { iRoutes } from '@/Interfaces/iRoutes';
declare class UserRoute implements iRoutes {
    path: string;
    router: import("express-serve-static-core").Router;
    usersController: UserController;
    constructor();
    private initializeRoutes;
}
export default UserRoute;
