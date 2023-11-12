import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk("/get/categories", async () => {
  const resp = await axios.get(`${import.meta.env.VITE_BASE_URL}/categories`);

  return await resp.data;
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState: { value: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.value = payload;
      })
      .addCase(getCategories.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error;
      });
  },
});

export default categoriesSlice.reducer;
