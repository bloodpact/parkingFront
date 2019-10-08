import React from "react";

const Members = () => {
  return (
    <li>
      <div className="collapsible-header">
        <i className="material-icons">people_outline</i>Члены Правления
      </div>
      <div className="collapsible-body">
        <p>Заволодько Виталий Игоревич</p>
        <p>Иванова Анастасия Михайловна</p>
        <p>Соколов Евгений Александрович</p>
        <p>Столбовой Андрей Юрьевич</p>
      </div>
    </li>
  );
};

export default Members;
