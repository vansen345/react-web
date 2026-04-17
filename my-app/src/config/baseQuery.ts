import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_CONFIG_CLIENT } from "../lib/config_api_client";

// export const API_BASE_URL = "https://react-web-backend.onrender.com/api";

// export const baseQuery = fetchBaseQuery({
//   baseUrl: API_BASE_URL,
//   prepareHeaders: (headers) => {
//     const token = "your_token_here";
//     if (token) {
//       headers.set("Authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

export const baseQuery = fetchBaseQuery({
  // baseUrl: "/piepapi/home",
  baseUrl: `${API_CONFIG_CLIENT.BASE_URL.replace('/api', '')}/piepapi/home`,
  prepareHeaders: (headers) => {
    const token = "your_token_here";
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});