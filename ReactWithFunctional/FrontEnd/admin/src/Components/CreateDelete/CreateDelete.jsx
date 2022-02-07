import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import FormModel from "../Modal/FormModel";
import NormalModal from "../Modal/NormalModal";

export default function CreateDelete(props) {
  const { addNewProduct, deleteProducts,arrayProduct } = props;
  const [modelFlag, setModelFlag] = useState(false);
  const [deleteFlag, setDeleteFlag] = useState(false);

  const deleteButtonHandler = () => {
    setDeleteFlag(true);
    
  };

  console.log(arrayProduct);
  useEffect(() => {
    setModelFlag(false);
    setDeleteFlag(false);
  });

  return (
    <div>
      <div className="delete-edit">
        <div>
          <Button variant="danger" size="lg" onClick={deleteButtonHandler}>
            <i class="fas fa-minus-circle"></i>
            Delete Products
          </Button>
        </div>
        <div>
          <Button
            className="addNewItem"
            variant="success"
            size="lg"
            onClick={() => setModelFlag(true)}
          >
            <i class="fas fa-plus-circle"></i>
            Add Product
          </Button>
        </div>
      </div>
      <NormalModal modelFlag={deleteFlag} deleteProducts={deleteProducts} arrayProducts={arrayProduct}/>
      <FormModel
        modelFlag={modelFlag}
        addNewProduct={addNewProduct}
        heading={"New Product Details"}
      />
    </div>
  );
}
