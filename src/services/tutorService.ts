// services/tutorService.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Tutor } from '@/types/tutor';

export const tutorApi = createApi({
  reducerPath: 'tutorApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://tutorlink-server-sigma.vercel.app/api/',
    credentials: 'include',
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem('userToken');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
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
        },
      }),
      transformResponse: (response: { data: Tutor[] }) => response.data,
    }),
    
    // Add getSingleTutor endpoint
    getSingleTutor: builder.query<Tutor, string>({
      query: (id) => ({
        url: `tutor/${id}`,
        method: 'GET',
      }),
      transformResponse: (response: { data: Tutor }) => response.data,
    }),

    createTutor: builder.mutation<Tutor, Partial<Tutor>>({
      query: (newTutor) => ({
        url: 'tutor',
        method: 'POST',
        body: newTutor,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: (response: { data: Tutor; message: string }) => response.data,
    }),
  }),
});

export const { 
  useGetTutorsQuery,
  useGetSingleTutorQuery,
  useCreateTutorMutation 
} = tutorApi;