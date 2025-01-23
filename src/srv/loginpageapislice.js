import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginpageapi = createApi({
    reducerPath: 'loginpageapi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}), //Base URL
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => '/users', //Endpoint
        }),
        getAlbumDetails: builder.query({
            query: () => '/albums'
        })
    })
});

export const { useGetUserDetailsQuery, useGetAlbumDetailsQuery } = loginpageapi;