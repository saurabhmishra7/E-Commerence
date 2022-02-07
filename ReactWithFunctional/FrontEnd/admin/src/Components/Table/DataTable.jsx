import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import FormModel from "../Modal/FormModel";
import NormalModel from "../Modal/NormalModal";

export default function DataTable(props) {
  const [ modelFlag, setModelFlag ] = useState(false);
  const [ elementID, setElementID ] = useState("");
  const [ formModelFlag, setformModelFlag ] = useState(false);
  const [ productDetails, setProductDetails ] = useState({});
  const [ updateFlag, setUpdateFlag ] = useState(true);
  const { tableHeader, productData, updateProduct, deleteProduct,updateArray } = props;
  const [ arrayProducts, setArrayProducts ] = useState([]);
  const [ arrayFlag, setArrayFlag ] = useState(false);

  const modalHandler = (id) => {
    setModelFlag(true);
    setElementID(id);
  };
 
  const FormModelHandler = (name, price, category, id,image,productStock) => {
    setformModelFlag(true);
    setProductDetails({
      productName: name,
      productPrice: price,
      productCategory: category,
      productID: id,
      imageURL: image,
      productStock:productStock
    });
    setUpdateFlag(true);
  };

  const checkHandler = (id, event) => {
    if (event.target.checked === true) {
      setArrayProducts([...arrayProducts, +id]);
      
    } else {
      const newArrayProduct = arrayProducts.filter((element) => {
        return +id !== element;
      });
      setArrayProducts([...newArrayProduct]);
    }
    setArrayFlag(true);
  };

  useEffect(() => {
    setModelFlag(false);
    setformModelFlag(false);
    setUpdateFlag(false);
    setArrayFlag(false);
    updateArray(arrayProducts);
  });

  useEffect(()=>{
    setArrayProducts([]);
  },[])

  return (
    <div>
      <Table striped bordered hover className="table">
        <thead>
          <tr className="names">
            {tableHeader.map((element) => {
              return (
                <th>
                  <h2>{element}</h2>
                </th>
              );
            })}
            <th>
              <h2>Action</h2>
            </th>
          </tr>
        </thead>
        <tbody className="product-table-body">
          {productData?.map((element) => {
            return (
              <tr>
                <td
                  style={{
                    display: "flex",
                    flex: "wrap",
                    justifyContent: "space-around",
                  }}
                >
                  <div>
                    <input
                      type="checkbox"
                      onClick={(event) =>
                        checkHandler(element.productID, event)
                      }
                    />
                  </div>
                  <div>{element.productID}</div>
                </td>
                <td>{element.productName}</td>
                <td>{element.productPrice}</td>
                <td>{element.productCategory}</td>
                <td>{element.productStock}</td>
                <td className="edit-delete">
                  <div>
                    <i
                      className="fas fa-trash fa-2x"
                      onClick={() => modalHandler(element.productID)}
                    ></i>
                  </div>
                  <div>
                    <i
                      className="fas fa-pen-alt fa-2x"
                      onClick={() =>
                        FormModelHandler(
                          element.productName,
                          element.productPrice,
                          element.productCategory,
                          element.productID,
                          element.imageURL,
                          element.productStock,
                        )
                      }
                    ></i>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <NormalModel
        modelFlag={modelFlag}
        deleteProduct={deleteProduct}
        id={elementID}
        arrayProducts={ arrayProducts }
        arrayFlag = { arrayFlag }
      />
      {console.log(arrayProducts,"arrayProduct")}
      <FormModel
        modelFlag={formModelFlag}
        heading={"Update Product Details"}
        productDetails={productDetails}
        updateProduct={updateProduct}
        updateFlag={updateFlag}
      />
    </div>
  );
}
