import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { usersAPI } from '../../api/api'
import { UsersState } from './types';

const getUsers = createAsyncThunk(
  'users/getUsers',
  () => {
    return usersAPI.getUsers();
  }
)

/*export const fetchGetModelsStatistics = createAsyncThunk(
	"models/getModelsStatistcs",
	(dto: IGetModelsStatistics) => {
		return getModelsStatistcs(dto);
	}
);
*/

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
    builder.addCase(getUsers.pending, (state: UsersState, action: any) => {
      state.isLoad = true;
    }),
    builder.addCase(getUsers.fulfilled, (state: UsersState, action: any) => {
      console.log(action);
    }),
    builder.addCase(getUsers.rejected, (state: UsersState, action: any) => {
      
    })
  },
})

// Action creators are generated for each case reducer function
export const {  } = usersSlice.actions

export default usersSlice.reducer