import React from "react";
import { NavLink } from 'react-router-dom'
export const NavBar = () => {

  return  (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            Note App
        </div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exect="true">
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/abouts">
                    About
                </NavLink>
            </li>

        </ul>
    </nav>
)
}