import controller from "../controllers/cartController";
import { Router } from "express";

export const router: Router = Router();
router.put('/update',controller.updateCart);
router.get('/getCartItems/:id',controller.getCartItems);
