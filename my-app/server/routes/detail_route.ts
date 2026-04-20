import { Application, Request, Response } from "express";
import { detailController } from "../controller/detail_controller";

export default function detailRoute(app: Application) {
    app.post(
        "/piepapi/home/piep-detail",
        (req: Request, res: Response) =>
            detailController.getDetail(req, res)
    );
}