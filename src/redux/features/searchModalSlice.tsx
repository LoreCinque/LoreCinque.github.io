import { createSlice } from "@reduxjs/toolkit";

interface SearchModalState {
    isSearchModalOpen: boolean;
}

const initialState: SearchModalState = {
    isSearchModalOpen: false,
}

const searchModalSlice = createSlice({
    name: 'searchModal',
    initialState,
    reducers: {
        toggleSearchModalOpen: ( state ) => {
            state.isSearchModalOpen = true;
        },
        toggleSearchModalClose: ( state ) => {
            state.isSearchModalOpen = false;
        },
    }
})

export const {toggleSearchModalClose,toggleSearchModalOpen} = searchModalSlice.actions;
export default searchModalSlice.reducer;