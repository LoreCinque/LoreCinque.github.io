// sidebarSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
  isSidebarOpen: boolean;
}

const initialState: SidebarState = {
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebarOpen: (state) => {
      state.isSidebarOpen = true;
    },
    toggleSidebarClose: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleSidebarOpen, toggleSidebarClose } = sidebarSlice.actions;
export default sidebarSlice.reducer;
