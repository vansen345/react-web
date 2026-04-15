import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API_BASE_URL = "http://localhost:3000/api";

export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers) => {
    const token = "your_token_here";
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
