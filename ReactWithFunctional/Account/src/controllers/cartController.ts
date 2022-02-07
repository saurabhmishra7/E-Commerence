import cartServices from "../services/cartServices";
import { Request, Response } from "express";

async function updateCart(req: Request, res: Response) {
  try {
    const cartObject: object = {
      userID: req.body.userID,
    };
    await cartServices.updateCart(cartObject);
    res.send("Cart Is Updated");
  } catch (err) {
    console.log(err);
  }
}

async function getCartItems(req: Request, res: Response) {
  try {
    const userID = req.params.id;
    const [results, metadata]  = await cartServices.getProductByUserID(+userID);
    res.send((results));
  } catch (err) {
    res.send(err);
  }
}


export default{
updateCart,
getCartItems
}