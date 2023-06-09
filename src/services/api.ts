// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Movie, MovieDetails} from './res-types';
const baseURL = 'https://api.themoviedb.org/3/';
export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: headers => {
      // Add the token to the headers
      headers.set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWFiMmQ2OWVmZGYwZGVlYTc3MWI5MzJhMWI5ZTUwMyIsInN1YiI6IjY0NjVmZWJkMDA2YjAxMDEyNmY0YTZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zDcGrsO1STnfN2MErlzUK5b6Sn2b8dZ_Foh6Ctzm9CA',
      );

      return headers;
    },
  }),
  endpoints: builder => ({
    getTopPopular: builder.query<Movie[], number>({
      query: page => {
        console.log('🚀 -> file: api.ts:24 -> page:', page);
        return `/movie/top_rated?language=en-US&include_adult=false&page=${page}`;
      },
      transformResponse: (response: any) => {
        return response.results;
      },
      forceRefetch: ({currentArg, previousArg}) => previousArg !== currentArg,
    }),
    getTopPopularShows: builder.query<Movie[], number>({
      query: page => {
        return `/tv/top_rated?language=en-US&include_adult=false&page=${page}`;
      },
      transformResponse: (response: any) => {
        return response.results;
      },
      forceRefetch: ({currentArg, previousArg}) => previousArg !== currentArg,
    }),
    getDetails: builder.query<MovieDetails, {stype: string; id: number}>({
      query: ({stype, id}) => {
        if (stype === 'movie') {
          return `/movie/${id}?language=en-US`;
        } else {
          return `/tv/${id}?language=en-US`;
        }
      },
    }),
    search: builder.query<Movie[], {queryText: string}>({
      query: ({queryText}) => {
        return `/search/multi?query=${queryText}&language=en-US&include_adult=false&page=${1}`;
      },
      transformResponse: (response: any) => {
        return response.results;
      },
      forceRefetch: ({currentArg, previousArg}) => previousArg !== currentArg,
    }),
  }),
});

export const {
  useGetTopPopularQuery,
  useLazyGetTopPopularQuery,
  useGetTopPopularShowsQuery,
  useLazyGetTopPopularShowsQuery,
  useLazySearchQuery,
  useGetDetailsQuery,
} = rtkApi;
