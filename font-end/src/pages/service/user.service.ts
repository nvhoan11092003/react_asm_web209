import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://database-bay.vercel.app/",
    headers: {
      Authentication: "Bearer ",
    },
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (user: any) => ({
        url: `/api/signin`,
        method: "POST",
        body: user,
      }),
    }),
    signUp: builder.mutation({
      query: (user: any) => ({
        url: `/api/signup`,
        method: "POST",
        body: user,
      }),
    }),
    getUsers: builder.query<any[], void>({
      query: () => "/api/user", // GET
    }),
    deleteUser: builder.mutation({
      query: (id: string) => ({
        url: `/api/user/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = userAPI;
