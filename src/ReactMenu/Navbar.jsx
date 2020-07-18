import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import Style from '../ReactMenu/Style.css';
export default class Navbar extends Component {
    render() {
        return (
            <>
            <div className="container-fluid nav_bg">
                <div className="row">
<div className="col-10 mx-auto">
                  <nav className="navbar navbar-expand-lg  ">
  <NavLink className="navbar-brand" to="#">Tushant Design</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/" activeClassName="menu-active">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="service" activeClassName="menu-active">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about" activeClassName="menu-active">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact" activeClassName="menu-active">Contact</NavLink>
      </li>
     

       </ul>
    </div>
</nav>
</div>

                </div>

</div>  
            </>
        )
    }
}
