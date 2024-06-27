import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getUsersApi } from "../api";
import { TUser } from "../types/types";

interface IUsersSliceState {
  data: TUser[];
  isUserLoading: boolean;
  error: string | undefined;
}

const initialState: IUsersSliceState = {
  data: [],
  isUserLoading: false,
  error: undefined,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () =>
  getUsersApi(),
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.isUserLoading = false;
      console.log(state);
    },
  },
  selectors: {
    selectUser: (state) => {
      state.data;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isUserLoading = true;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isUserLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.data = action.payload;
      });
  },
});

export const { selectUser } = usersSlice.selectors;
export const { getUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
