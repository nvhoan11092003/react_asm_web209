import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAPI = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080",
        headers: {
            Authentication: "Bearer "
        }
    }),
    endpoints: builder => ({
        signIn: builder.mutation({
            query: (user: any) => ({
                url: `/api/signin`,
                method: "POST",
                body: user
            })
        }),
        signUp: builder.mutation({
            query: (user: any) => ({
                url: `/api/signup`,
                method: "POST",
                body: user
            })
        })
    })

})

export const { useSignInMutation, useSignUpMutation } = userAPI