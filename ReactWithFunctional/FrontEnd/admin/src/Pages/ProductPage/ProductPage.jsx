import React, { useEffect, useState } from "react";
import CreateDelete from "../../Components/CreateDelete/CreateDelete";
import SideBar from "../../Components/offcanvas/sideBar";
import useAxios from "../../CustomeHooks/apiHooks";
import "./ProductPage.scss";
import DataTable from "../../Components/Table/DataTable";

export default function ProductPage() {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [deleteFlag, setDeleteFlag] = useState(false);
  const [addProductFlag, setAddProductFlag] = useState(false);
  const [updateProductFlag, setUpdateProductFlag] = useState(false);
  const [deleteProductsFlag, setDeleteProductsFlag] = useState(false);
  const [productArray,setSaveArray] = useState([]);

  const tableHeader = [
    "ProductID",
    "ProductName",
    "ProductPrice",
    "ProductCategory",
    "ProductStock"
  ];

  const {
    getProduct,
    deleteProduct,
    updateProduct,
    addProduct,
    deleteProducts,
  } = useAxios();
  console.log(loading);

  const fetchApi = async () => {
    try {
      const response = await getProduct("product");
      setResponse(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteProductByID = async (path) => {
    try {
      await deleteProduct(path);
      setDeleteFlag(true);
    } catch (err) {
      console.log(err);
    }
  };

  const addNewProduct = async (path, productObject) => {
    try {
      await addProduct(path, productObject);
      setAddProductFlag(true);
    } catch (err) {
      console.log(err);
    }
  };

  const modifiedProduct = async (path, productObject) => {
    try {
      await updateProduct(path, productObject);
      setUpdateProductFlag(true);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProductByIDs = async (path, ids) => {
    try {
      await deleteProducts(path, ids);
      setDeleteProductsFlag(true);
    } catch (err) {
      console.log(err);
    }
  };

  const updateArray = (array)=>{
     setSaveArray(array);
     console.log(productArray);
  }
  

  useEffect(() => {
    if (
      response === null ||
      deleteFlag === true ||
      addProductFlag === true ||
      updateProductFlag === true ||
      deleteProductsFlag === true
    ) {
      fetchApi();
      setDeleteFlag(false);
      setAddProductFlag(false);
      setUpdateProductFlag(false);
      setDeleteProductsFlag(false);
    }
  });

  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <SideBar />
          
          <div className="product-table">
            <DataTable
              tableHeader={tableHeader}
              productData={response}
              deleteProduct={deleteProductByID}
              updateProduct={modifiedProduct}
              updateArray = {updateArray}
            />
          </div>
          <CreateDelete addNewProduct={addNewProduct}  deleteProducts={deleteProductByIDs} arrayProduct={productArray}/>
        </>
      )}
    </div>
  );
}
