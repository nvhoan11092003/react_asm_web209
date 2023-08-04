import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const cartAPI = createApi({
    reducerPath: "cart",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080",
        headers: {
            Authentication: "Bearer "
        }
    }),
    endpoints: builder => ({
        // action
        getCart: builder.query<any, string>({
            query: () => `/api/cart`  // GET
        }),

        addCart: builder.mutation({
            query: (product: any) => ({
                url: `/api/cart`,
                method: "POST",
                body: product
            })
        }),

    })

})

export const { useAddCartMutation, useGetCartQuery } = cartAPI