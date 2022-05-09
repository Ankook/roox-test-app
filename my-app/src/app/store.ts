import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "../features/sortConfig/sortSlice";
import usersReducer from "../features/users/usersSlice";
import editModeReducer from "../features/editMode/editModeSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    sort: sortReducer,
    editMode: editModeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
