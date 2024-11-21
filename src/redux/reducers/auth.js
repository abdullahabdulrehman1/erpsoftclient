import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  user: true,
  loader: true,
  isAdmin: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    userExist(state, action) {
      state.user = action.payload;
      state.loader = false;
    },
    userNotExist(state) {
      (state.user = null), (state.loader = false);
    },
    setLoading(state, action) {
        state.loader = action.payload;
      },
  },
});
export default authSlice;
export const { userExist, userNotExist ,setLoading} = authSlice.actions;

