import React, { Component } from "react";
import services from "../../services/services";
import {Navigate } from 'react-router-dom';

export default class PrivateRoute extends Component{

render(){
    const {children} = this.props;
    console.log(services.isAuthenticate(),"a");
    return  services.isAuthenticate()? children : <Navigate to="/login" />;
  }
}