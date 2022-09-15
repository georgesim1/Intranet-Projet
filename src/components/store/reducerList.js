import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    collaboratersToDisplay: null,
    collaboraters: null,
};

export const CollaboratersSlice = createSlice({
  name: 'Collaboraters',
  initialState,
  reducers: {

    addAllCollaboraters: (state, action) => {
      state.collaboraters = action.payload.collaboraters;
      state.collaboratersToDisplay = state.collaboraters;
    },
    filterCollaboratersToDisplay: (state, action) => {
      state.collaboratersToDisplay = action.payload.collaboratersToDisplay;
    },
    deleteCollaborater: (state, action) => {
        const collaboraterToDelete = action.payload.collaborater;
        state.collaboratersToDisplay = state.collaboratersToDisplay.filter(collaborater => {
            return collaborater.id != collaboraterToDelete.id;
        })
      },
  },
});

export const { addAllCollaboraters, filterCollaboratersToDisplay, deleteCollaborater} = CollaboratersSlice.actions;
export default CollaboratersSlice.reducer;