import IndexController from '@/Controllers/indexController';
import { iRoutes } from '@/Interfaces/iRoutes';
declare class IndexRoute implements iRoutes {
    path: string;
    router: import("express-serve-static-core").Router;
    indexController: IndexController;
    constructor();
    private initializeRoutes;
}
export default IndexRoute;
