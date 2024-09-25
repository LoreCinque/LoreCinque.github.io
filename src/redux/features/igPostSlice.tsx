import { createSlice } from "@reduxjs/toolkit";

interface IgPostModalState {
    isIgPostModalOpen: boolean;
}

const initialState: IgPostModalState = {
    isIgPostModalOpen: false,
}

const igPostModalSlice = createSlice({
    name: 'igPostModal',
    initialState,
    reducers: {
        toggleIgPostModalOpen: (state) => {
            state.isIgPostModalOpen = true;
        },
        toggleIgPostModalClose: (state) => {
            state.isIgPostModalOpen = false;
        }
    }
})

export const {
    toggleIgPostModalOpen,
    toggleIgPostModalClose
} = igPostModalSlice.actions;

export default igPostModalSlice.reducer;