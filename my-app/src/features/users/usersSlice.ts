import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { usersAPI } from '../../api/api'

const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    return usersAPI.getUsers();
  }
)



export interface UsersState {
  users: Array<any>,
  isLoad: boolean
}

const initialState: UsersState = {
  users: [],
  isLoad: false
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state: any, action: any) => {
      
    }),
    builder.addCase(getUsers.fulfilled, (state: any, action: any) => {
      
    }),
    builder.addCase(getUsers.rejected, (state: any, action: any) => {
      
    })
  },
})

// Action creators are generated for each case reducer function
export const {  } = usersSlice.actions

export default usersSlice.reducer