import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import routes from './routes/Route';

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        dotenv.config();
    }

    private config(): void {
        this.app.use(morgan('combined'));
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use( express.json());
    }

    private routes(): void {
        this.app.use('/', routes);
    }

}

export default new App().app;
