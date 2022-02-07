import { Request, Response } from "express";
import cartProductServices from "../services/cartProductServices";
import cartServices from "../services/cartServices";

async function insertCartProduct(req: Request, res: Response) {
  try {
    const userID = req.body.userID;
    const cart:any = await cartServices.findCartID(userID);
    console.log(cart,req.body);
    const cartObject = {
      cartID: cart.cartID,
      productID: req.body.productID,
      quantity: req.body.quantity,
    };
    console.log(cartObject);
    const isProduct = await cartProductServices.findByProductID(
      req.body.productID
    );
    if (isProduct) {
      await cartProductServices.updateProductQuantity(cartObject);
      res.send("Updated ProductQuantity");
    } else {
      await cartProductServices.insertCartProduct(cartObject);
      res.send("Created");
    }
  } catch (error) {
    res.send(error);
  }
}

async function getCartProduct(req: Request, res: Response) {
  try {
    const cartID = req.params.userID;
    const cartItems = await cartProductServices.getCartProduct(+cartID);
    res.send(cartItems);
  } catch (error) {
    res.send(error);
  }
}

async function removeCartItem(req: Request, res: Response) {
  try {
    const productID = req.body.productID;
    console.log(req.body);
    
    const isDeleted = await cartProductServices.deleteCartProduct(productID);
    if(isDeleted){
      res.send("Deleted");
    }
  } catch (error) {
    res.send(error);
  }
  
}
export default {
  insertCartProduct,
  getCartProduct,
  removeCartItem
};
