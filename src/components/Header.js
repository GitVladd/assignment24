import React from "react"

import { Link } from "react-router-dom";

import logo from  '../image/LogoMakr.png';

import '../css/Header.css';


function Header(){
    return(
        <div className = "topnav">
            <div className = "logoNav">
                <img src={logo} alt="logo"/>
            </div>
            <div className= "searchNav">
                <input type="text" placeholder="Search.."/>
            </div>
            <div className= "buttonNav">
                <Link to ={`/registration`} className="button">Sign Up</Link>
                <Link to ={`/products`} className="button">Products</Link>
                <Link to ={`/`} className="button">Home</Link>
            </div>    

        </div>
    )
}

export default Header;