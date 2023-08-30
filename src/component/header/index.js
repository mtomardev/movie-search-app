import React from "react";
import './style.css'
import { NavLink, Link } from "react-router-dom";
import Mode from "../mode";
import TemporaryDrawer from "./drawer";

const Header = () =>{
    return(
        <div className="header-flex">
            <div className="header-logo">
            <Link to="/">Cinema</Link>
            </div>
            <div className="header-btns">
                <Mode/>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies/popular">Popular</NavLink>
                <NavLink to="/movies/top_rated">Top Rated</NavLink>
                <NavLink to="/movies/upcoming">Upcoming</NavLink>

            </div>
            <div className="mobile-drawer">
                    <TemporaryDrawer/>
                {/* <div className="drawer-flex">
                <Mode/>
                <TemporaryDrawer/>
                </div> */}
            </div>
        </div>
    )
}

export default Header