import { Router } from "express";
import Controllers from "../controllers/controllers";

export default class DownloadRoutes {
    private router;
    private controllers = new Controllers();

    constructor() {
        this.router = Router();
        this.routes();
    };

    private routes() {
        this.router.get("/:file", this.controllers.getFile);
    };

    public getRoute() {
        return this.router;
    };
};