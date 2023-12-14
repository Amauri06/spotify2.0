import { configureStore } from '@reduxjs/toolkit';


import playerReducer from './features/playerSlice';
import { shazamApi } from './services/shazam';
import sidebarReducer from './features/menuSlice' 


export const store = configureStore({

  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    player:playerReducer,
    sidebar: sidebarReducer,
  
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(shazamApi.middleware),

 
});