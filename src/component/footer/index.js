import React from "react";
import './style.css'
import { NavLink, Link } from "react-router-dom";
import Mode from "../mode";

const Footer = () =>{
    return(
        <div className="header-flex">
            <div className="header-logo">
            <Link to="/">Cinema</Link>
            </div>

            <p>@All Right Reserved</p>
        </div>
    )
}

export default Footer