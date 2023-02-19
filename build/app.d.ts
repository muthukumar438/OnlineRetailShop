import express from 'express';
import { iRoutes } from './Interfaces/iRoutes';
declare class App {
    app: express.Application;
    env: string;
    port: string | number;
    constructor(routes: iRoutes[]);
    listen(): void;
    getServer(): express.Application;
    private connectToDatabase;
    private startMiddlewares;
    private startRoutes;
    private startSwagger;
    private startErrorHandling;
}
export default App;
