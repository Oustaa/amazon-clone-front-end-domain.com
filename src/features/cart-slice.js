import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartProducts = createAsyncThunk("get/products", async () => {
  const resp = await axios.post(`${import.meta.env.VITE_BASE_URL}/cart`, {
    ids: Object.keys(JSON.parse(localStorage.getItem("cart_products"))),
  });

  const data = await resp.data;

  return data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: true,
    products: [],
    savedLater: [],
    ids: {},
  },
  reducers: {
    getIds: (state) => {
      state.ids = JSON.parse(localStorage.getItem("cart_products")) || {};
    },
    updateIds: (state, { payload }) => {
      state.ids = payload;
      localStorage.setItem("cart_products", JSON.stringify(payload));
    },
    setIds: (state, { payload: { _id, qte, price, store } }) => {
      if (state?.ids[_id]) state.ids[_id].qte += Number(qte);
      else
        state.ids = {
          ...state.ids,
          [_id]: { qte: Number(qte), saveLater: false, price, store },
        };
      localStorage.setItem("cart_products", JSON.stringify(state.ids));
    },
    deleteProduct: (state, { payload: id }) => {
      delete state.ids[id];
      state.products = state.products.filter(({ _id }) => _id !== id);
      state.savedLater = state.savedLater.filter(({ _id }) => _id !== id);
      localStorage.setItem("cart_products", JSON.stringify(state.ids));
    },
    toggleQuantity: (state, { payload }) => {
      state.ids[payload.id].qte += payload.number;
      if (state.ids[payload.id].qte === 0) {
        delete state.ids[payload.id];
        state.products = state.products.filter(({ _id }) => _id !== payload.id);
      }
      localStorage.setItem("cart_products", JSON.stringify(state.ids));
    },
    saveLater: (state, { payload: id }) => {
      state.ids[id].saveLater = true;
      localStorage.setItem("cart_products", JSON.stringify(state.ids));
      // add products with id 'id' to the savedLater list
      const prodId = state.products.find(({ _id }) => _id === id);
      state.savedLater.push(prodId);
      // delete products with id 'id' from the products list
      state.products = state.products.filter(({ _id }) => _id !== id);
    },
    addToCart: (state, { payload: id }) => {
      state.ids[id].saveLater = false;
      const prodId = state.savedLater.find(({ _id }) => _id === id);
      // adding products with id 'id' to the products list
      state.products.push(prodId);
      // removing the product from the saved for later list
      state.savedLater = state.savedLater.filter(({ _id }) => _id !== id);
      localStorage.setItem("cart_products", JSON.stringify(state.ids));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCartProducts.fulfilled, (state, { payload: products }) => {
        state.loading = false;
        state.products = products.filter(
          ({ _id }) => !state.ids[_id].saveLater
        );
        state.savedLater = products.filter(
          ({ _id }) => state.ids[_id].saveLater
        );
      })
      .addCase(getCartProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {
  setIds,
  getIds,
  deleteProduct,
  toggleQuantity,
  saveLater,
  addToCart,
  updateIds,
} = cartSlice.actions;

export default cartSlice.reducer;
