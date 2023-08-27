import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategory } from '../../models/type'


export const categoryAPI = createApi({
    reducerPath: "categories",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://database-bay.vercel.app/",
        headers: {
            Authentication: "Bearer "
        }
    }), tagTypes: ['category'],
    endpoints: builder => ({
        // action
        getCategories: builder.query<ICategory[], void>({
            query: () => "/api/category",
            providesTags: ["category"]
        }),
        getCategoryById: builder.query<any, string>({
            query: (id: string) => `/api/category/${id}`,
            providesTags: ["category"]   // GET
        }),
        addCategory: builder.mutation({
            query: (category: any) => ({
                url: `/api/category`,
                method: "POST",
                body: category
            })
            ,
            invalidatesTags: ["category"]
        }),
        updateCategory: builder.mutation({
            query: ({ id, category }: { id: string, category: any }) => ({
                url: `/api/category/${id}`,
                method: "PUT",
                body: category
            }),
            invalidatesTags: ["category"]
        }),
        deleteCategory: builder.mutation({
            query: (id: string) => ({
                url: `/api/category/${id}`,
                method: "DELETE",

            }),
            invalidatesTags: ["category"]
        })
    })

})

export const { useGetCategoriesQuery } = categoryAPI