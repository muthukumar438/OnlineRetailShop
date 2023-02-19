import App from '@/app';

import UserRoute from './Routes/usersRoute';
import IndexRoute from './Routes/indexRoute';
import validateEnv from './Utils/validateEnv';
import OrderRoute from './Routes/orderRoutes';
import RouteProduct from './Routes/productRoutes';
import AuthenticateRoute from './Routes/authRoute';

validateEnv();

const app = new App([new IndexRoute(), new UserRoute(), new RouteProduct(), new OrderRoute(),new AuthenticateRoute()]);

app.listen();