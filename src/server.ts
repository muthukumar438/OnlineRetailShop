import App from '@/app';

import UserRoute from './Routes/usersRoute';
import IndexRoute from './Routes/indexRoute';
import validateEnv from './Utils/validateEnv';
import orderRoute from './Routes/orderRoutes';
import RouteProduct from './Routes/productRoutes';
import AuthRoute from './Routes/authRoute';

validateEnv();

const app = new App([new IndexRoute(), new UserRoute(), new RouteProduct(), new orderRoute(),new AuthRoute()]);

app.listen();
