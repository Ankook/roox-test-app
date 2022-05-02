import { createSlice } from '@reduxjs/toolkit'
import { EditModeState } from './types'

const initialState: EditModeState = {
  editMode: false
}

export const editModeSlice = createSlice({
  name: "editMode",
  initialState,
  reducers: {
    setEditMode(state: EditModeState, action) {
      state.editMode = true;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setEditMode } = editModeSlice.actions

export default editModeSlice.reducer