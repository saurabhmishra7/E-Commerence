import React, { Component } from 'react';
import Login from '../Components/Login/Login';
import {Navigate} from "react-router-dom";
import productServices from '../services/productServices';

export default function LoginPage() {
  return (
    <div>
      <Login />
    </div>
  )
}
