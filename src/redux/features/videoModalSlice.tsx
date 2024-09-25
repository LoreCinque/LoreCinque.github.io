import { createSlice } from '@reduxjs/toolkit';

interface VideoModalState {
  isVideoModalOpen: boolean;
}

const initialState: VideoModalState = {
  isVideoModalOpen: false,
};

const videoModalSlice = createSlice({
  name: 'videoModal',
  initialState,
  reducers: {
    toggleVideoModalOpen: (state) => {
      state.isVideoModalOpen = true;
    },
    toggleVideoModalClose: (state) => {
      state.isVideoModalOpen = false;
    },
  },
});

export const { toggleVideoModalOpen, toggleVideoModalClose } = videoModalSlice.actions;
export default videoModalSlice.reducer;