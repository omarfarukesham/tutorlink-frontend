// services/tutorService.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Tutor } from '@/types/tutor';

export const tutorApi = createApi({
  reducerPath: 'tutorApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tutorlink-server-sigma.vercel.app/api/' }),
  endpoints: (builder) => ({
    getTutors: builder.query<Tutor[], Record<string, unknown>>({
      query: (params) => ({
        url: 'tutor',
        params: {
          search: params?.search,
          category: params?.category,
          subject: params?.subject,
          minRate: params?.minRate,
          maxRate: params?.maxRate,
          // Remove unused params
        },
      }),
      transformResponse: (response: { data: Tutor[] }) => response.data,
    }),
  }),
});

export const { useGetTutorsQuery } = tutorApi;


// // services/tutorService.ts
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { Tutor } from '@/types/tutor';

// export const tutorApi = createApi({
//   reducerPath: 'tutorApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://tutorlink-server-sigma.vercel.app/api/' }),
//   endpoints: (builder) => ({
//     getTutors: builder.query<Tutor[], Record<string, unknown>>({
//       query: (params) => ({
//         url: 'tutor',
//         params: {
//           search: params?.search,
//           filter: params?.filter,
//           subject: params?.subject,
//           minRate: params?.minRate,
//           maxRate: params?.maxRate,
//           // Add other params as needed
//         },
//       }),
//       transformResponse: (response: { data: Tutor[] }) => response.data,
//     }),
//   }),
// });

// export const { useGetTutorsQuery } = tutorApi;