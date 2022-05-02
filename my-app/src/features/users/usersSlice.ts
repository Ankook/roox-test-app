import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { usersAPI } from '../../api/api'
import { UsersState } from './types';

export const getUsers = createAsyncThunk(
  "users/getUsers",
  () => {
    return usersAPI.getUsers();
  }
)


const initialState: UsersState = {
  users: [],
  isLoad: false,
  error: {}
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state: UsersState, action: any) => {
      state.isLoad = true;
    })
    builder.addCase(getUsers.fulfilled, (state: UsersState, action: any) => {
      state.users = action.payload;
      state.isLoad = false;
      state.error = {};
    })
    builder.addCase(getUsers.rejected, (state: UsersState, action: any) => {
      state.isLoad = false;
      state.error = action.error;
    })
  },
})

// Action creators are generated for each case reducer function
//export const {  } = usersSlice.actions

export default usersSlice.reducer