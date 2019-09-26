import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue lighten-1 ">
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>

          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <NavLink to="/" activeClassName="active">
                О компании
              </NavLink>
            </li>
            <li>
              <NavLink to="/rates">Тарифы</NavLink>
            </li>
            <li>
              <NavLink to="/documents">Документы</NavLink>
            </li>
            <li>
              <NavLink to="/news">Новости</NavLink>
            </li>
            <li>
              <NavLink to="/meetings">О собраниях</NavLink>
            </li>
          </ul>
          <ul className="sidenav" id="mobile-demo">
            <li>
              <NavLink to="/" activeClassName="active">
                О компании
              </NavLink>
            </li>
            <li>
              <NavLink to="/rates">Тарифы</NavLink>
            </li>
            <li>
              <NavLink to="/documents">Документы</NavLink>
            </li>
            <li>
              <NavLink to="/news">Новости</NavLink>
            </li>
            <li>
              <NavLink to="/meetings">О собраниях</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
