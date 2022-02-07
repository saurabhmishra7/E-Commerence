import { ProductInstance as product } from "../model/productModel";

function getProducts() {
  return product.findAll();
}

function deleteProduct(productID: any) {
  return product.destroy({
    where: {
      productID: productID,
    },
  });
}

function deleteProducts() {
  return product.destroy({
    truncate: true
  });
}

function updateProduct(productDetails: any){
  return product.update(
   {
     productName: productDetails.productName,
     productPrice: productDetails.productPrice,
     productCategory: productDetails.productCategory,
     imageURL: productDetails.imageURL,
     productStock: productDetails.productStock
  },
  {
    where: {
      productID: productDetails.productID
    }
  }
)}

function createProduct(productDetails: any){
  return product.create({
    productName: productDetails.productName,
    productPrice: productDetails.productPrice,
    productCategory: productDetails.productCategory,
    imageURL: productDetails.imageURL,
    productStock: productDetails.productStock
 })
}

function getProduct(productID: number){
  return product.findByPk(productID);
}

function deleteProductByID(productID: any) {
  return product.destroy({
    where: {
      productID: productID,
    },
  });
}

export default {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteProducts,
  deleteProductByID
}