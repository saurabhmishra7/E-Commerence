import types from "./cartTypes";

const initialState = {
  fetching: true,
  cartItems:[],
  isDeleted: false
}

export default function cartReducers(state=initialState,action){
  switch (action.type) {
    case types.REQUEST_CART_API:
      return {...state}
    case types.SUCCESS_API_REQUEST:
            return {...state,fetching:false,cartItems:action.cartItems}
    case types.CHANGE_FETCHING:
            return {...state,fetching:true};
    case types.REMOVE_CART_ITEM_SUCCESS:
          return {...state,isDeleted:true};
    case types.REMOVE_CART_ITEM:
            return {...state,isDeleted:false};
    default:
      return {...state}     
  }
}