import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OpenSectionState {
  about: boolean;
  skill: boolean;
  service: boolean;
  feature: boolean;
  portfolio: boolean;
  project: boolean;
  blog: boolean;
  news: boolean;
  contact: boolean;
  subscribe: boolean;
  _persist?: OpenSectionState;
  anySectionOpen: boolean; // New variable
}

const initialState: OpenSectionState = {
  about: false,
  skill: false,
  service: false,
  feature: false,
  portfolio: false,
  project: false,
  blog: false,
  news: false,
  contact: false,
  subscribe: false,
  _persist: undefined,
  anySectionOpen: false, // Initialize to false
};

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    toggleSection: (state, action: PayloadAction<keyof OpenSectionState>) => {
      // Create a new state object with updated values
      const newState: OpenSectionState = {
        ...state,
        [action.payload]: true,
        anySectionOpen: true, 
      };
      return newState;
    },
    closeAllSections: () => {
      // Create a new state object with all values set to false
      const newState: OpenSectionState = {
        about: false,
        skill: false,
        service: false,
        feature: false,
        portfolio: false,
        project: false,
        blog: false,
        news: false,
        contact: false,
        subscribe: false,
        _persist: undefined,
        anySectionOpen: false, // Reset anySectionOpen to false
      };
      return newState;
    },
  },
});

export const { toggleSection, closeAllSections } = sectionsSlice.actions;

export default sectionsSlice.reducer;
