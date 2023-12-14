//slice para cerrar la barra lateral en mobile.

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

 const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
  reducers: {
    onOpen: (state) => {state.isOpen = true},
    onClose: (state) => {state.isOpen = false}

  }
 })

 export const {onOpen, onClose} = sidebarSlice.actions;
 export const selectSidebar = (state) => state.sidebar.isOpen;


export default sidebarSlice.reducer;