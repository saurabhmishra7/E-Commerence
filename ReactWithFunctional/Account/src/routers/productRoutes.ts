import productController from "../controllers/productController";
import { Router } from "express";

export const router: Router = Router();
router.get("/",productController.getProducts);
router.get("/:id",productController.getProduct);
router.delete("/items",productController.deleteProduct);
router.post("/",productController.createProduct);
router.delete("/",productController.deleteProducts);
router.put("/",productController.updateProduct);
router.delete("/:id",productController.deleteProductByID);

