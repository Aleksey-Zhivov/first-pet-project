import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getUsersApi } from "../api";
import { TUser } from "../types/types";
import { cities } from "../../someData/cities";

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

const randomIndex = Math.floor(Math.random() * cities.length);

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () =>
  getUsersApi(),
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.isUserLoading = false;
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
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<TUser[]>) => {
          state.isUserLoading = false;
          action.payload.map((user, index) =>
            action.payload[index].address.city === "Anytown"
              ? (user.address.city = cities[randomIndex].name)
              : (user.address.city = "-"),
          );
          state.data = action.payload;
        },
      );
  },
});

export const { selectUser } = usersSlice.selectors;
export const { getUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
