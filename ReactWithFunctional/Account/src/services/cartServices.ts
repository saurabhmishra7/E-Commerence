import { CartInstance as Cart } from "../model/cartModel";
import { ProductInstance as Product } from "../model/productModel";
import { sequelizeConnection } from "../utility/database";

function getProductByUserID(userID: number) {
  return sequelizeConnection.query('SELECT * FROM  CartTable JOIN CartProductTable ON CartTable.cartID=CartProductTable.cartID  JOIN ProductInformation ON CartProductTable.productID=ProductInformation.productID WHERE userID='+userID)
}

function insertCart(userID: number) {
  return Cart.create({ userID: +userID });
}

function updateCart(cartObject: any) {
  return Cart.update(
    {
      userID: cartObject.userID,
    },
    {
      where: {
        userID: +cartObject.userID,
      },
    }
  );
}

function findCartID(userID:number) {
return Cart.findOne({
  where:{
    userID:userID
  }
})
  
}
export default {
  getProductByUserID,
  insertCart,
  updateCart,
  findCartID
};
