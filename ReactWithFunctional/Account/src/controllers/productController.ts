import productServices from "../services/productServices";
import { Request, Response } from "express";

async function getProducts(req: Request, res: Response) {
  try {
    const products = await productServices.getProducts();
    res.send(products);
  } catch (error) {
    res.send(error);
  }
}

async function getProduct(req: Request, res: Response) {
  try {
    const id: number = +req.params.id;
    const product = await productServices.getProduct(id);
    res.send(product);
  } catch (error) {
    res.send(error);
  }
}

async function updateProduct(req: Request, res: Response) {
  try {
    const productDetails = {
      productName: req.body.productName,
      productPrice: req.body.productPrice,
      productCategory: req.body.productCategory,
      productID: req.body.productID,
      imageURL: req.body.imageURL,
      productStock: req.body.productStock
    };
    console.log(productDetails);
    await productServices.updateProduct(productDetails);
    res.send("Updated");
  } catch (error) {
    res.send(error);
  }
}

async function deleteProduct(req: Request, res: Response) {
  try {
    const productIDs = req.body.deleteObject;
    await productServices.deleteProduct(productIDs);
    res.send("Deleted");
  } catch (error) {
    res.send(error);
  }
}

async function deleteProducts(req: Request, res: Response) {
  try {
    await productServices.deleteProducts();
    res.send("Deleted");
  } catch (error) {
    res.send(error);
  }
}

async function createProduct(req: Request, res: Response) {
  try {
    const productDetails = {
      productName: req.body.productName,
      productPrice: req.body.productPrice,
      productCategory: req.body.productCategory,
      productStock: req.body.productStock,
      imageURL: req.body.imageURL
    };
    await productServices.createProduct(productDetails);
    res.send("Created");
  } catch (error) {
    res.send(error);
  }
}


async function deleteProductByID(req: Request, res: Response) {
  try {
    const productID = req.params.id;
    console.log(productID,"bm");
    await productServices.deleteProduct(productID);
    res.send("Deleted");
  } catch (error) {
    res.send(error);
  }
}

export default {
  deleteProduct,
  updateProduct,
  getProduct,
  getProducts,
  createProduct,
  deleteProducts,
  deleteProductByID
};
