import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_URL,
});

const baseQeryExtended: BaseQueryFn = async (args, api, extraOption) => {
  const result = await baseQery(args, api, extraOption);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQeryExtended,
  refetchOnReconnect: true,
  refetchOnFocus: false,
  tagTypes: ["crud"],
  endpoints: () => ({}),
});
