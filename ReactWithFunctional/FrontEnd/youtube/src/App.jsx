import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import React,{Component,render} from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRotue";
import ProfilePage from "./pages/ProfilePage";
import Logout from "./components/Logout";
import DeliveryAddress from "./pages/DeliveryAddress";
import BillingAddress from "./components/Billing";
import CheckoutPage from "./pages/CheckoutPage";


function App () {
    return (
      <>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/product/:productID"  element={<Product/>}/>
        <Route exact path="/productList" element={<ProductList  />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
        <Route exact path="/profile" element={<PrivateRoute><ProfilePage/></PrivateRoute>}/>
        <Route exact path="/logout"  element={<Logout />} />
        <Route exact path="/checkout"  element={<CheckoutPage />} />
        </Routes>
      </Router>
      </>
    );
}

export default App;


