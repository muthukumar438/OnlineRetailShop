import AuthController from '@/Controllers/authController';
import { iRoutes } from '@/Interfaces/iRoutes';
declare class AuthenticateRoute implements iRoutes {
    path: string;
    router: import("express-serve-static-core").Router;
    authController: AuthController;
    constructor();
    private initializeRoutes;
}
export default AuthenticateRoute;
