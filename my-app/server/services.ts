import { API_CONFIG } from "./config_api";

type ApiOptions<TQuery = Record<string, unknown>, TBody = unknown> = {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  query?: TQuery;
  body?: TBody;
  token?: string;
};

export const callApi = async <
  TResponse = unknown,
  TQuery = Record<string, unknown>,
  TBody = unknown
>({
  endpoint,
  method = "GET",
  query,
  body,
  token,
}: ApiOptions<TQuery, TBody>): Promise<TResponse> => {
  const queryString = query
    ? new URLSearchParams(query as Record<string, string>).toString()
    : "";

  const url = `${API_CONFIG.BASE_URL}${endpoint}${
    queryString ? `?${queryString}` : ""
  }`;

  console.log(`[PROXY] Calling external API: ${url}`);

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
    body: method !== "GET" ? JSON.stringify(body) : undefined,
  });

  return response.json();
};