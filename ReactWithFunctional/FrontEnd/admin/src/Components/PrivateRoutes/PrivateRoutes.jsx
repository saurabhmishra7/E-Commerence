import React, { Component } from "react";
import productServices from "../../services/productServices";
import {Navigate } from 'react-router-dom';

export default class PrivateRoute extends Component{

render(){
    const {children} = this.props;
    return  productServices.isAuthenticate()? children : <Navigate to="/" />;
  }
}