import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    displayName: "",
    introText: "",
    uid: "",
    accessToken: "",
    photoURL: "",
    bgURL: "",
    styleTag: [],
    isLoading: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.displayName = action.payload.displayName;
      state.introText = action.payload.introText;
      state.uid = action.payload.uid;
      state.accessToken = action.payload.accessToken;
      state.photoURL = action.payload.photoURL;
      state.bgURL = action.payload.bgURL;
      state.styleTag = action.payload.styleTag;
      state.isLoading = true;
    },

    clearUser: (state) => {
      state.displayName = "";
      state.introText = "";
      state.uid = "";
      state.accessToken = "";
      state.photoURL = "";
      state.bgURL = "";
      state.styleTag = "";
      state.isLoading = true;
    },
  },
});

export const { loginUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
