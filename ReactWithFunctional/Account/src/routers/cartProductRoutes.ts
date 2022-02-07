import controller from "../controllers/cartProductController";
import { Router } from "express";

export const router: Router = Router();
router.get('/:cartID',controller.getCartProduct);
router.post('/',controller.insertCartProduct);
router.delete('/',controller.removeCartItem);