import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

export default function NormalModal(props) {
  const { id, deleteProduct, arrayProducts, deleteProducts } = props;
  const [modelFlag, setShow] = useState(props.modelFlag);
  const [deleteFlag, setDeleteFlag] = useState(false);
  const [arrayFlag, setArrayFlag] = useState(false);
  const [array, setArray] = useState([]);
  const handleClose = () => setShow(false);

  function DeleteHandler() {
    if(id){
      setDeleteFlag(true);
    }
    if (arrayProducts.length > 0) {
      setArrayFlag(true);
    }
  }

  
  useEffect(() => {
    if (props.modelFlag) {
      setShow(true);
    }
    if (arrayProducts) {
      setArray(arrayProducts);
    }

    if (modelFlag) {
      setDeleteFlag(false);
    }
    if (deleteFlag) {
      console.log("aa");
      deleteProduct("product/" + id);
      setDeleteFlag(false);
      setShow(false);
    }
    if (arrayFlag && modelFlag) {
      console.log("cvb");
      deleteProducts("items", arrayProducts);
      setShow(false);
      setArrayFlag(false);
    }
  });

  
  return (
    <>
      {console.log(deleteFlag)}
      <Modal className="delete-products" show={modelFlag} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure You Want to Delete It!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={DeleteHandler}>
            Delete Product
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
