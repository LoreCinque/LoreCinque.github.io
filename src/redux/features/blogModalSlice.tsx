import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BlogItem {
  img: string;
  title: string;
  date?: string;
}

interface BlogModalState {
  isBlogModalOpen: boolean;
  currentBlogItem?: BlogItem; // Optional, to store the current blog item
}

const initialState: BlogModalState = {
  isBlogModalOpen: false,
  currentBlogItem: undefined,
};

const blogModalSlice = createSlice({
  name: 'blogModal',
  initialState,
  reducers: {
    toggleBlogModalOpen: (state, action: PayloadAction<BlogItem>) => {
      state.isBlogModalOpen = true;
      state.currentBlogItem = action.payload;
    },
    toggleBlogModalClose: (state) => {
      state.isBlogModalOpen = false;
      state.currentBlogItem = undefined; // Reset current blog item when closing the modal
    },
  },
});

export const { toggleBlogModalOpen, toggleBlogModalClose } = blogModalSlice.actions;
export default blogModalSlice.reducer;
