import React, { useEffect } from "react";
import CompanyData from "./CompanyData";
import Chief from "./Chief";
import Members from "./Members";
import Accountant from "./Accountant";
import M from "materialize-css/dist/js/materialize.min";

const About = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="section white">
      <div className="row container">
        <h3 className="header">
          Гаражно-строительный кооператив «Шуваловский-3» <br />
          (ГСК "ШУВАЛОВСКИЙ-3")
        </h3>
        <ul className="collapsible popout">
          <CompanyData />
          <Chief />
          <Members />
          <Accountant />
        </ul>
      </div>
      <div className="row container"></div>
    </div>
  );
};

export default About;
