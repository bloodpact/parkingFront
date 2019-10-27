import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className={"blue lighten-1"}>
        <div className="nav-wrapper container blue lighten-1 ">
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>

          <ul id="nav-mobile" className="center hide-on-med-and-down">
            <li>
              <NavLink to="/" activeClassName="active">
                О кооперативе
              </NavLink>
            </li>
            <li>
              <NavLink to="/rates">Взносы</NavLink>
            </li>
            <li>
              <NavLink to="/documents">Документы</NavLink>
            </li>
            <li>
              <NavLink to="/news">Новости</NavLink>
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
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
