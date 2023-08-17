import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../models/type'


export const foodAPI = createApi({
    reducerPath: "foods",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080",
        headers: {
            Authentication: "Bearer "
        }
    }),
    tagTypes: ["food"],
    endpoints: builder => ({
        // action
        getFoods: builder.query<IProduct[], void>({
            query: () => "/api/products",
            providesTags: ['food']  // GET
        }),
        getFoodById: builder.query<IProduct, string>({
            query: (id: string) => ({
                url: `/api/products/${id}`,
            }),
            providesTags: ['food']
        }),
        addFood: builder.mutation({
            query: (food: any) => ({
                url: `/api/products`,
                method: "POST",
                body: food
            }),
            invalidatesTags: ['food']

        }),

        updateFood: builder.mutation({
            query: ({ id, food }: { id: string, food: any }) => ({
                url: `/api/products/${id}`,
                method: "PUT",
                body: food
            }),
            invalidatesTags: ['food']

        }),
        deleteFood: builder.mutation({
            query: (id: string) => ({
                url: `/api/products/${id}`,
                method: "DELETE",

            }),
            invalidatesTags: ['food']

        })
    })

})

export const { useGetFoodsQuery, useAddFoodMutation, useDeleteFoodMutation, useGetFoodByIdQuery, useUpdateFoodMutation } = foodAPI
