// rightSidebarSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface RightSidebarState {
  isRightSidebarOpen: boolean;
}

const initialState: RightSidebarState = {
  isRightSidebarOpen: false,
};

const rightSidebarSlice = createSlice({
  name: 'rightSidebar',
  initialState,
  reducers: {
    toggleRightSidebarOpen: (state) => {
      state.isRightSidebarOpen = true;
    },
    toggleRightSidebarClose: (state) => {
      state.isRightSidebarOpen = false;
    },
  },
});

export const { toggleRightSidebarOpen, toggleRightSidebarClose } = rightSidebarSlice.actions;
export default rightSidebarSlice.reducer;
