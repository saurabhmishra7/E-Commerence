import types from "../cart/cartTypes";

const getCartProduct = (userID) => {
  return { type: types.REQUEST_CART_API , payload: userID};
};

const apiRequestSucess = (cartItems) => {
  console.log(cartItems);
  return { type: types.SUCCESS_API_REQUEST, cartItems}
}

const insertCartItems = (cartItems)=>{
  return { type: types.INSERT_CARTITEM_API, cartItems}
}
const changeFetching = ()=>{
  return { type: types.CHANGE_FETCHING}
}

const removeCartItem = (productID)=>{
  return { type: types.REMOVE_CART_ITEM,productID};
}

const removeCartSucess = ()=>{
  return { type: types.REMOVE_CART_ITEM_SUCCESS}
}

export default {
  getCartProduct,
  apiRequestSucess,
  insertCartItems,
  changeFetching,
  removeCartItem,
  removeCartSucess
}