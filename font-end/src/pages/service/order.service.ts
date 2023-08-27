import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const orderAPI = createApi({
    reducerPath: "orders",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://database-bay.vercel.app/",
        headers: {
            Authentication: "Bearer "
        }
    }),
    endpoints: builder => ({
        getAllOrder: builder.query<any, any>({
            query: () => "/api/order"
        }),
        createOrder: builder.mutation({
            query: (order: any) => ({
                url: `/api/order`,
                method: "POST",
                body: order
            })
        })

    })
})
export const { useCreateOrderMutation, useGetAllOrderQuery } = orderAPI