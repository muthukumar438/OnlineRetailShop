import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { NODE_ENV, PORT, ORIGIN, STATUS } from '@config';
import { databaseConnection } from './database';
import { iRoutes } from '@Interfaces/iRoutes';
import express from 'express';
import { connect, set } from 'mongoose';
import orderRoute from './Routes/orderRoutes';
import RouteProduct from './Routes/productRoutes';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: iRoutes[]) {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 3000;

    this.connectToDatabase();
    this.startRoutes(routes);
    this.startSwagger();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log('Server connected')
    });
  }

  public getServer() {
    return this.app;
  }

  private connectToDatabase() {
    if (this.env !== 'production') {
      set('debug', true);
    }
    connect(databaseConnection.url);
  }

  private startRoutes(routes: iRoutes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }

  private startSwagger() {
    const options = {
      swaggerDefinition: {
        info: {
          title: 'REST API',
          version: '1.0.0',
          description: 'Swagger docs',
        },
      },
      apis: ['swagger.yaml'],
    };

    const specs = swaggerJSDoc(options);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }
}

const app = new App([new orderRoute(), new RouteProduct()])

export default App;