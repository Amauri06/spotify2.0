

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



export const shazamApi = createApi({
    reducerPath: 'shazamApi',
    baseQuery: fetchBaseQuery({
        //consulta base
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders:(headers) =>{
            headers.set('X-RapidAPI-Key', '089e921a2cmsh9044ba70e9ead5dp1bc271jsn4f000f6f9945' );
            return headers;
        },
    }),
    //construyendo todos los puntos finales de la api.
    endpoints:(builder) => ({
        //una vez contruimos el endpoint a partir de consulta base redux nos permite llamarlo como hook
       getTopCharts: builder.query({query: () => '/charts/track' }), 
       
    }),
});

export const {
// exportando como hook
useGetTopChartsQuery,
useGetSongDetailsQuery

} = shazamApi
















// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const shazamCoreApi = createApi({
//   reducerPath: 'shazamCoreApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://shazam-core.p.rapidapi.com/',
//     prepareHeaders: (headers) => {
//       headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);

//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getTopCharts: builder.query({ query: () => 'v1/charts/world' }),
//     getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
//     getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
//     getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
//     getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
//     getSongDetails: builder.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}` }),
//     getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
//   }),
// });

// export const {
//   useGetTopChartsQuery,
//   useGetSongsByGenreQuery,
//   useGetSongsByCountryQuery,
//   useGetSongsBySearchQuery,
//   useGetArtistDetailsQuery,
//   useGetSongDetailsQuery,
//   useGetSongRelatedQuery,
// } = shazamCoreApi;