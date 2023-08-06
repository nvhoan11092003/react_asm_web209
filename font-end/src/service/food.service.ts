import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const foodAPI = createApi({
    reducerPath: "foods",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080",
        headers: {
            Authentication: "Bearer "
        }
    }),
    endpoints: builder => ({
        // action
        getFoods: builder.query<any[], void>({
            query: () => "/api/products"  // GET
        }),
        getFoodById: builder.query<any, string>({
            query: (id: string) => `/api/products/${id}`, // GET
        }),
        searchFoodByKeyWord: builder.query({
            query: (keyword: any) => `/api/products/search?keyword=${keyword}`
        })
        ,
        addFood: builder.mutation({
            query: (food: any) => ({
                url: `/api/products`,
                method: "POST",
                body: food
            })
        }),
        updateFood: builder.mutation({
            query: ({ id, food }: { id: string, food: any }) => ({
                url: `/api/products/${id}`,
                method: "PUT",
                body: food
            })
        }),
        deleteFood: builder.mutation({
            query: (id: string) => ({
                url: `/api/products/${id}`,
                method: "DELETE",

            })
        })
    })

})

export const {
    useGetFoodsQuery,
    useAddFoodMutation,
    useDeleteFoodMutation,
    useGetFoodByIdQuery,
    useUpdateFoodMutation,
    useSearchFoodByKeyWordQuery
} = foodAPI