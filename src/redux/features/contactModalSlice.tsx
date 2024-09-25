import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactModalState {
  isContactModalOpen: boolean;
}

const initialState: ContactModalState = {
  isContactModalOpen: false,
};

const contactModalSlice = createSlice({
  name: 'contactModal',
  initialState,
  reducers: {
    toggleContactModalOpen: (state) => {
      state.isContactModalOpen = true;
    },
    toggleContactModalClose: (state) => {
      state.isContactModalOpen = false;
    },
  },
});

export const { toggleContactModalOpen, toggleContactModalClose } = contactModalSlice.actions;
export default contactModalSlice.reducer;