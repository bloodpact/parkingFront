import React from "react";

const CompanyData = () => {
  return (
    <li>
      <div className="collapsible-header">
        <i className="material-icons">format_align_left</i>Реквизиты
      </div>
      <div className="collapsible-body">
        <p>ИНН: 7810942852 КПП: 781401001</p>
        <p>ОГРН: 1147847339078</p>
        <p>Расчетный счет: 40703810490420000024</p>
        <p>Банк: ПАО "БАНК "САНКТ-ПЕТЕРБУРГ"</p>
        <p>БИК: 044030790</p>
        <p>Корр. счет: 30101810900000000790</p>
        <p>
          Юридический адрес: 197350, Санкт-Петербург г, Парашютная ул, дом 61,
          корпус 3, литер . А, офис 1
        </p>
      </div>
    </li>
  );
};

export default CompanyData;
