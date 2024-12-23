import axios from "axios";
import { server } from "../../server";

export const createAdminProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: "createAdminProductRequest" });
    const { data } = await axios.post(`${server}/admin-product/add-product`, 
      productData, {
      withCredentials: true,    });
    dispatch({ type: "createAdminProductSuccess", payload: data.product });
  } catch (error) {
    dispatch({
      type: "createAdminProductFailed",
      payload: error.response.data.message,
    });
  }
};

export const getAdminProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "getAdminProductsRequest" });
    const { data } = await axios.get(`${server}/admin-product/get-products`, {
      withCredentials: true,
    });
    dispatch({ type: "getAdminProductsSuccess", payload: data.products });
  } catch (error) {
    dispatch({
      type: "getAdminProductsFailed",
      payload: error.response.data.message,
    });
  }
};
