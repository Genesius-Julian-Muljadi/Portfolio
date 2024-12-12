import express, { Application } from "express";
import cors from "cors";
import { PORT } from "./config";
import helmet from "helmet";
import DownloadRoutes from "./routes/download.routes";

export default class Server {
    private app: Application;
    private port: number | string;

    constructor() {
        this.port = PORT || 8000;
        this.app = express();
        this.middlewares();
        this.routes();
    };

    private middlewares() {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json());
    };

    private routes() {
        this.app.use("/download", new DownloadRoutes().getRoute());
    };

    public start() {
        this.app.listen(this.port, () => {
            console.log(`Mom, he's using port ${this.port}!`);
        });
    };
};