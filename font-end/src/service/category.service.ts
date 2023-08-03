import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const categoryAPI = createApi({
    reducerPath: "categories",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080",
        headers: {
            Authentication: "Bearer "
        }
    }),
    endpoints: builder => ({
        // action
        getCategories: builder.query<any[], void>({
            query: () => "/api/category"  // GET
        }),
        getCategoryById: builder.query<any, string>({
            query: (id: string) => `/api/category/${id}`, // GET
        }),
        addCategory: builder.mutation({
            query: (category: any) => ({
                url: `/api/category`,
                method: "POST",
                body: category
            })
        }),
        updateCategory: builder.mutation({
            query: ({ id, category }: { id: string, category: any }) => ({
                url: `/api/category/${id}`,
                method: "PUT",
                body: category
            })
        }),
        deleteCategory: builder.mutation({
            query: (id: string) => ({
                url: `/api/category/${id}`,
                method: "DELETE",

            })
        })
    })

})

export const { } = categoryAPI