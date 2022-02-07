import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

export default function FormModel(props) {
  const { addNewProduct, heading, productDetails, updateProduct, updateFlag } =
    props;
  const [modelFlag, setModelFlag] = useState(props.modelFlag);
  const [addProductFlag, setAddProductFlag] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [productStock, setProductStock] = useState(1);

  const nameHandler = (event) => {
    setProductName(event.target.value);
  };

  const priceHandler = (event) => {
    setProductPrice(event.target.value);
  };

  const categoryHandler = (event) => {
    setProductCategory(event.target.value);
  };

  const newProductHandler = () => {
    setAddProductFlag(true);
  };

  const imageHandler = (event) => {
    setImageURL(event.target.value);
  };

  const productStockHandler = (event) => {
    setProductStock(event.target.value);
  };

  const productObject = {
    productName: productName,
    productPrice: productPrice,
    productCategory: productCategory,
    productStock: productStock,
    imageURL: imageURL,
  };

  useEffect(() => {
    if (props.modelFlag) {
      setModelFlag(true);
    }
    if (updateFlag) {
      console.log(productDetails);
      setProductName(productDetails?.productName);
      setProductPrice(productDetails?.productPrice);
      setProductCategory(productDetails?.productCategory);
      setImageURL(productDetails?.imageURL);
      setProductStock(productDetails?.productStock);
    }

    if (addProductFlag && addNewProduct) {
      addNewProduct("product", productObject);
      setProductName(" ");
      setProductPrice("");
      setProductCategory("");
      setImageURL("");
      setProductStock(1);
      setAddProductFlag(false);
      setModelFlag(false);
    }
    if (addProductFlag && updateProduct) {
      updateProduct("product", {
        ...productObject,
        productID: +productDetails.productID,
      });
      setAddProductFlag(false);
      setModelFlag(false);
    }
  });

  return (
    <div>
      <Modal
        className="edit-product"
        show={modelFlag}
        onHide={() => setModelFlag(false)}
        dialogClassName="modal-0w"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>{heading}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="update">
          <label>
            <h4 style={{ margin: "0px" }}>Product Name</h4>
          </label>
          <div>
            <input
              type="text"
              size="30"
              onChange={nameHandler}
              value={productName}
            />
          </div>
          <label>
            <h4 style={{ margin: "0px" }}>Product Price</h4>
          </label>
          <div>
            <input
              type="text"
              size="30"
              onChange={priceHandler}
              value={productPrice}
            />
          </div>
          <label>
            <h4 style={{ margin: "0px" }}>Product Category</h4>
          </label>
          <div>
            <input
              type="text"
              size="30"
              onChange={categoryHandler}
              value={productCategory}
            />
          </div>
          <label>
            <h4 style={{ margin: "0px" }}>Product Stocks</h4>
          </label>
          <div>
            <input
              type="text"
              size="30"
              onChange={productStockHandler}
              value={productStock}
            />
          </div>
          <label>
            <h4 style={{ margin: "0px" }}>Image URL</h4>
          </label>
          <div>
            <textarea
              type="text"
              row="10"
              cols="50"
              onChange={imageHandler}
              value={imageURL}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={newProductHandler}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={() => setModelFlag(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
