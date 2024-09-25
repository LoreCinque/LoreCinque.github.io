// sidePanelSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface SidePanelState {
  isSidePanelOpen: boolean;
}

const initialState: SidePanelState = {
  isSidePanelOpen: false,
};

const sidePanelSlice = createSlice({
  name: 'sidePanel',
  initialState,
  reducers: {
    toggleSidePanelOpen: (state) => {
      state.isSidePanelOpen = true;
    },
    toggleSidePanelClose: (state) => {
      state.isSidePanelOpen = false;
    },
  },
});

export const { toggleSidePanelOpen, toggleSidePanelClose } = sidePanelSlice.actions;
export default sidePanelSlice.reducer;
