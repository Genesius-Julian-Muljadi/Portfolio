import { NextFunction, Request, Response } from "express";

export default class Controllers {
    public async getFile(req: Request, res: Response, next: NextFunction) {
        try {
            const { file } = req.params;
            res.status(200).sendFile(file, { root: "src" + "/public" });
        } catch (err) {
            next(err);
        };
    };
};