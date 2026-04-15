import { createApi } from "@reduxjs/toolkit/query/react";
import type { HomeItem } from "../../../model/home_type";
import type { BaseResponse } from "../../../model/response_type";
import { API_ENDPOINTS } from "../../config/api.config";
import { baseQuery } from "../../config/baseQuery";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery,
  tagTypes: ["Home"],
  endpoints: (builder) => ({
    getHomeList: builder.query<BaseResponse<HomeItem>, { limit: number; offset: number }>({
      query: ({ limit, offset }) => `${API_ENDPOINTS.HOME.getList}?limit=${limit}&offset=${offset}`,
      providesTags: ["Home"],
    }),
  }),
});

export const { 
  useGetHomeListQuery, 
  useLazyGetHomeListQuery, 
} = homeApi;
