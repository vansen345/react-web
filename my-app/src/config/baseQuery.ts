import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseQuery = fetchBaseQuery({
  baseUrl: "/piepapi/home",
  prepareHeaders: (headers) => {
    const token = "your_token_here";
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});