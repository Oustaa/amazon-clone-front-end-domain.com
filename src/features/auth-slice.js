import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const isLoggedIn = createAsyncThunk("/is/loggedin", async () => {
  const token = localStorage.getItem("token");

  if (!token) return { token: null, username: "" };
  const resp = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/auth/stores/isloggedin`,
    {
      headers: { Authorization: token },
    }
  );

  return await resp.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, username: "", currency: "USD", loading: true },
  reducers: {
    login: (state, { payload }) => {
      state.token = payload.token;
      state.username = payload.username;
      state.currency = payload.currency;
    },
    logout: (state) => {
      state.token = null;
      state.username = "";
      state.currency = "USD";
    },
    setCurrency: (state, { payload }) => {
      state.currency = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(isLoggedIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(isLoggedIn.fulfilled, (state, { payload }) => {
        if (!payload.token && !payload.username) {
          localStorage.removeItem("cart_products");
          localStorage.removeItem("visits");
        }
        state.username = payload.username;
        state.token = payload.token;
        state.loading = false;
      })
      .addCase(isLoggedIn.rejected, (state) => {
        localStorage.removeItem("cart_products");
        localStorage.removeItem("visits");
        state.loading = false;
      });
  },
});

export const { login, logout, setCurrency } = authSlice.actions;

export default authSlice.reducer;
