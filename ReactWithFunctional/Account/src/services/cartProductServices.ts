import { CartProductInstance as cartProduct } from "../model/cartProductModel";

function insertCartProduct(cartObject: any) {
  return cartProduct.create({
    cartID: cartObject.cartID,
    productID: cartObject.productID,
    quantity: cartObject.quantity,
  });
}

function findByProductID(productID: number) {
  return cartProduct.findOne({
    where: {
      productID: productID,
    },
  });
}

function updateProductQuantity(cartObject: any) {
  return cartProduct.update(
    {
      quantity: cartObject.quantity,
    },
    {
      where: {
        productID: cartObject.productID,
      },
    }
  );
}

function getCartProduct(cartID: number) {
  return cartProduct.findAll({
    where: {
      cartID: cartID,
    },
  });
}

function deleteCartProduct(productID: number){
  return cartProduct.destroy({
    where:{
      productID:productID
    }
  })
}

export default {
  insertCartProduct,
  getCartProduct,
  findByProductID,
  updateProductQuantity,
  deleteCartProduct
};
