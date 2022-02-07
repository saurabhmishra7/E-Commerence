import React, { useState } from "react";
import "./sideBar.scss";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };

  const logOutHandler = () => {
    localStorage.removeItem("admin");
    window.location.reload();
  };

  return (
    <div className="side-bar">
      <div className="dashBoard">
        <div>
          <Button variant="" onClick={handleShow}>
            <i class="fas fa-bars fa-2x"></i>
          </Button>
        </div>
        <div>
          <h3>WELCOME TO THE ADMIN PANEL</h3>
        </div>
        <div>
          <Button variant="" className="logout-button" onClick={logOutHandler}>
            LOG-OUT
          </Button>
        </div>
      </div>
      <div>
        <Offcanvas
          className="off-canvas"
          show={show}
          onHide={() => setShow(false)}
        >
          <Offcanvas.Header className="offcanvas-header">
            <Offcanvas.Title>
              <h3
                style={{
                  fontWeight: "bolder",
                  color: "white",
                  padding: "20px",
                }}
              >
                DASHBOARD
              </h3>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas-body">
            <div className="dashBoard-items">
              <i
                class="fab fa-product-hunt"
                style={{ marginRight: "20px" }}
              ></i>
              <Link to="/product">
                <span>Products Mangament</span>
              </Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}
