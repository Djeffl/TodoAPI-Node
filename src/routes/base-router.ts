import * as express from 'express';
export abstract class BaseRouter {
    protected router: express.Router;

    constructor() {
        this.router = express.Router();
    }

    public getRoutes() {
        return this.router;
    }
}
