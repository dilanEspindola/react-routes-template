import { UserInfo } from "@/model";
import { createSlice } from "@reduxjs/toolkit";
import { setAndPersistenceUserState, removeUserState } from "@/utils/";

export const EmptyUserState: UserInfo = {
  id: 0,
  name: "",
  email: "",
};

export const USER_KEY = "user";

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      setAndPersistenceUserState<UserInfo>(USER_KEY, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      setAndPersistenceUserState(USER_KEY, result);
      return result;
    },
    resetUser: () => {
      removeUserState(USER_KEY);
      EmptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
