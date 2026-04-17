import { Request, Response } from "express";
import { HomeItem } from '../../model/home_type';
import { BaseResponse } from "../../model/response_type";
import { API_CONFIG } from "../config_api";
import { callApi } from "../services";

export const homeController = {
  async getHomeList(req: Request, res: Response) {
    try {
      const { limit = 15, offset = 0 } = req.query;
      const token = req.headers.authorization;

      const result = await callApi<BaseResponse<HomeItem[]>>({
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