import { Request, Response } from "express";
import { BaseResponseObject } from '../../server/model/response_type.js';
import { API_CONFIG } from "../config_api";
import { HomeItemPrx } from '../model/home_type.js';
import { callApi } from "../services";

export const detailController = {
    async getDetail(req: Request, res: Response) {
        try {
            const { PV325, PP300, FT300 } = req.body;
            const token = req.headers.authorization;
            const rs = await callApi<BaseResponseObject<HomeItemPrx>>({
                endpoint: API_CONFIG.ENDPOINTS.DETAIL,
                method: "POST",
                body: { PV325, PP300, FT300 },
                token,
            });
            res.send(rs);
        } catch (error) {
            console.log(error);
            res.status(500).send({
                status: "error",
                message: error,
            });
        }
    },
};