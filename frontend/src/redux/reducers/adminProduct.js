import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const adminProductReducer = createReducer(initialState, {
  createAdminProductRequest: (state) => {
    state.isLoading = true;
  },
  createAdminProductSuccess: (state, action) => {
    state.isLoading = false;
    state.products = [...state.products, action.payload];
  },
  createAdminProductFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  getAdminProductsRequest: (state) => {
    state.isLoading = true;
  },
  getAdminProductsSuccess: (state, action) => {
    state.isLoading = false;
    state.products = action.payload;
  },
  getAdminProductsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});
