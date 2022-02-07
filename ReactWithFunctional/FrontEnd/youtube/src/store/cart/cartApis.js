import API from "../../network/apis";

const getCartItems = (userID)=>{
  return API.cartInstance.get(`/getCartItems/${userID}`);
}

const insertCartItems = (cartObject)=>{
  return API.cartProductInstance.post('/',cartObject);
}

const removeCartItems = (productID)=>{
  console.log(productID);
  return API.cartProductInstance.delete('/',{data:productID})
}

export default{
  getCartItems,
  insertCartItems,
  removeCartItems
}