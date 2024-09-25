import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BlogItem {
  img: string;
  title: string;
  date?: string;
}

interface LightboxState {
  isLightboxOpen: boolean;
  currentLightboxImg?: string; // Optional, to store the current blog item
}

const initialState: LightboxState = {
  isLightboxOpen: false,
  currentLightboxImg: '',
};

const lightboxSlice = createSlice({
  name: 'lightbox',
  initialState,
  reducers: {
    toggleLightboxOpen: (state, action: PayloadAction<string>) => {
      state.isLightboxOpen = true;
      state.currentLightboxImg = action.payload;
    },
    toggleLightboxClose: (state) => {
      state.isLightboxOpen = false;
      state.currentLightboxImg = ''; // Reset current blog item when closing the modal
    },
  },
});

export const { toggleLightboxOpen, toggleLightboxClose } = lightboxSlice.actions;
export default lightboxSlice.reducer;
