import React from "react";

const Members = () => {
  return (
    <li>
      <div className="collapsible-header">
        <i className="material-icons">people_outline</i>Члены Правления
      </div>
      <div className="collapsible-body">
        <ol>
          <li>Заволодько Виталий Игоревич</li>
          <li>Иванова Анастасия Михайловна</li>
          <li>Соколов Евгений Александрович</li>
          <li>Столбовой Андрей Юрьевич</li>
        </ol>
      </div>
    </li>
  );
};

export default Members;
