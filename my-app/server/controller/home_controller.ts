import { Request, Response } from "express";
import { HomeItemPrx } from '../../server/model/home_type.js';
import { BaseResponsePRX } from "../../server/model/response_type.js";
import { API_CONFIG } from "../config_api";
import { callApi } from "../services";

export const homeController = {
  async getHomeList(req: Request, res: Response) {
    try {
      const { limit = 15, offset = 0 } = req.query;
      const token = req.headers.authorization;

      const result = await callApi<BaseResponsePRX<HomeItemPrx[]>>({
        endpoint: API_CONFIG.ENDPOINTS.HOME,
        query: { limit, offset },
        token,
      });

      res.send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        status: "error",
        message: error,
      });
    }
  },
};