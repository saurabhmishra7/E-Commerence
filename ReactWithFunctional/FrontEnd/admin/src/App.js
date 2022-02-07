import React, { Component } from "react";
import LoginPages from "./Pages/LoginPages";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminDashboardPage from "./Pages/AdminDashboardPage";
import { Link, Routes,BrowserRouter as Router, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage/ProductPage";
import PrivateRoute from "./Components/PrivateRoutes/PrivateRoutes"
export default class App extends Component {
  render() {
    return (
      <div>
       {/* <ProductPage/> */}
        <Router>
          <Routes>
            <Route exact path="/" element={ <LoginPages />}></Route>
            <Route exact path="/dashBoard" element={<PrivateRoute><AdminDashboardPage/></PrivateRoute>}/>
            <Route exact path="/product" element={<PrivateRoute><ProductPage /></PrivateRoute>} ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
