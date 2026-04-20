import { createApi } from "@reduxjs/toolkit/query/react";
import type { HomeItem } from "../../../model/home_type";
import type { BaseResponseObject } from "../../../model/response_type";
import { baseQuery } from '../../config/baseQuery';

export const detailApi = createApi({
    reducerPath: "detailApi",
    baseQuery,
    tagTypes: ["Detail"],
    endpoints: (builder) => ({
        getDetail: builder.mutation<BaseResponseObject<HomeItem>, { PV325: string; PP300: number; FT300: number }>({
            query: ({ PV325, PP300, FT300 }) => ({
                url: "piep-detail",
                method: "POST",
                body: { PV325, PP300, FT300 },
            })
        }),
    }),
})

export const { useGetDetailMutation } = detailApi;