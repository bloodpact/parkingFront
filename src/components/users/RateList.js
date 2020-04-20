import * as React from "react";

export const RateList = ({ dataTable }) => {
  return (
    <div>
      <h5>Справочная информация</h5>
      <table>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>кол-во</th>
            <th>ед изм</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          {dataTable[0].tarifData.map(tdItem => {
            return (
              <tr key={tdItem._id}>
                <td>{tdItem.infoName}</td>
                <td>{tdItem.amountOfServicesInfo}</td>
                <td>{tdItem.valueName}</td>
                <td>{tdItem.summOfServicesInfo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default RateList;
