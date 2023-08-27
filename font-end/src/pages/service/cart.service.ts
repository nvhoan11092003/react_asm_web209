import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userJSON = JSON.parse(localStorage.getItem("user") ?? "");
const accessToken = userJSON.accessToken;
export const cartAPI = createApi({
  reducerPath: "cart",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://database-bay.vercel.app/",
    headers: {
      Authentication: `Bearer  ${accessToken}`,
    },
  }),
  endpoints: (builder) => ({
    // action
    getCart: builder.query<any, string>({
      query: () => `/api/cart`, // GET
    }),

    addCart: builder.mutation({
      query: (product: any) => ({
        url: `/api/cart`,
        method: "POST",
        body: product,
      }),
    }),
  }),
});

export const { useAddCartMutation, useGetCartQuery } = cartAPI;
