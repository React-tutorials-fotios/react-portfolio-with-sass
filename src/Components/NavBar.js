import React from "react";
import { NavLink } from "react-router-dom";

import avatar from "../img/fotios2020Profile.png";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="profie">
        <img src={avatar} alt="avatar" />
      </div>
      <nav className="nav">
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolios" exact activeClassName="active">
              Portfolios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" exact activeClassName="active">
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <footer className="footer">
        <p>@2021</p>
      </footer>
    </div>
  );
}
