import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class Logout extends Component {
  render() {

    return (
      <div>
        <Navigate to="/" />
      </div>
    )
  }
}
