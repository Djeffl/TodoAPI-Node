
export class Container{
    constructor() {
    }

    public createApplication(): express.Application {
      const app: express.Application = express();


      return app;
    }
}
