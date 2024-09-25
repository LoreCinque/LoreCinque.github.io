import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BlogLandscapeItem {
  img?: string;
  title: string;
  date?: string;
}

interface BlogLandscapeModalState {
  isBlogLandscapeModalOpen: boolean;
  currentBlogLandscapeItem?: BlogLandscapeItem; // Optional, to store the current blogLandscape item
}

const initialState: BlogLandscapeModalState = {
  isBlogLandscapeModalOpen: false,
  currentBlogLandscapeItem: undefined,
};

const blogLandscapeModalSlice = createSlice({
  name: 'blogLandscapeModal',
  initialState,
  reducers: {
    toggleBlogLandscapeModalOpen: (state, action: PayloadAction<BlogLandscapeItem>) => {
      state.isBlogLandscapeModalOpen = true;
      state.currentBlogLandscapeItem = action.payload;
    },
    toggleBlogLandscapeModalClose: (state) => {
      state.isBlogLandscapeModalOpen = false;
      state.currentBlogLandscapeItem = undefined; // Reset current blogLandscape item when closing the modal
    },
  },
});

export const { toggleBlogLandscapeModalOpen, toggleBlogLandscapeModalClose } = blogLandscapeModalSlice.actions;
export default blogLandscapeModalSlice.reducer;
