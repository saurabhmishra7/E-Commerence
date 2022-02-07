import cartAPI from "../cart/cartApis";
import { takeLatest, call, put, all } from "redux-saga/effects";
import types from "./cartTypes";
import Action from "./cartAction";

function* getCartItem(action) {
  try {
    const response = yield call(cartAPI.getCartItems, action.payload);
    const cartItems = response.data;
    console.log(cartItems);
    yield put(Action.apiRequestSucess(cartItems));
  } catch (error) {
    console.log(error);
  }
  //console.log("kvjbsk");
}

function* updateCartItems(action) {
  try {
    console.log("updateCart");
    const response = yield call(cartAPI.insertCartItems, action.cartItems);
    yield put(Action.changeFetching());
  } catch (error) {
    console.log(error);
  }
}

function* removeCartItems(action){
  try {
    console.log(action);
    const response = yield call(cartAPI.removeCartItems,action.productID);
    yield put(Action.removeCartSucess());
  } catch (error) {
    console.log(error);
  }
}


export function* cartSaga() {
  yield all([
    takeLatest(types.REQUEST_CART_API, getCartItem),
    takeLatest(types.INSERT_CARTITEM_API, updateCartItems),
    takeLatest(types.REMOVE_CART_ITEM,removeCartItems)
  ]);
}
