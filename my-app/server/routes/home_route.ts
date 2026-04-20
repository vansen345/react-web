import { Application, Request, Response } from "express";
import { homeController } from "../controller/home_controller";

export default function homeRoute(app: Application) {
    app.get(
        "/piepapi/home/list-public",
        (req: Request, res: Response) =>
            homeController.getHomeList(req, res)
    );
}