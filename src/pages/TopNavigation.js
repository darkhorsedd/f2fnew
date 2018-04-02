import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
class TopNavigation extends Component {
  render() {
 

    return (
        <div className="top-nav-containerwrap">
        <div className="top-nav-conatiner">
            <div className="container "> 
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
            <img src="../assests/images/logo.jpg" className="main-logo" />
            </a>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
           
           
                <li className="nav-item worklink">
                <NavLink className="nav-link" exact to="/Work" activeClassName="active">Work</NavLink>
                </li>
                <li className="nav-item culturelink">
                <NavLink className="nav-link" exact to="/Culture" activeClassName="active">Culture</NavLink>
                </li>
                <li className="nav-item aboutlink">
                <NavLink className="nav-link"  to="/about" activeClassName="active">About</NavLink>
                </li>
                
                <li className="nav-item clientlink">
                <NavLink className="nav-link" exact to="/clients" activeClassName="active">Clients</NavLink>
                </li>
                <li className="nav-item contactlink">
                <NavLink className="nav-link" exact to="/Contact" activeClassName="active">Contact</NavLink>
                </li>
              
              
            </ul>
            
            </div>
            </nav>
            </div>
        </div>
        </div>
    ); 
  }
}

export default TopNavigation;