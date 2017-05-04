import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { DataBaseConnector } from './mongo-client-wrapper';
import {PRODUCTS_COLLECTION} from "./models/product.model";

// Creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public express: express.Application;

    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(cors());
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    // Configure API endpoints.
    private routes(): void {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        let router = express.Router();
        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
        router.get('/products', async (req, res, next) => {
            const products = await DataBaseConnector.dataBase.collection(PRODUCTS_COLLECTION).find({}).toArray();
            res.json({
                message: products
            });
        });
        router.post('/products', async (req, res, next) => {
            res.json({
                message: req.body
            });
        });
        this.express.use('/', router);
    }

}

export default new App().express;