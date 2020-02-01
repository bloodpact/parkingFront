import * as React from "react";

export const RateList = () => {
  return (
    <div>
      <div id="jan" className="col s12">
        <table>
          <thead>
            <tr>
              <th>Наименование</th>
              <th>Сумма</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Alvin</td>

              <td>$0.87</td>
            </tr>
            <tr>
              <td>Alan</td>

              <td>$3.76</td>
            </tr>
            <tr>
              <td>Jonathan</td>

              <td>$7.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="feb" className="col s12">
        Февраль
      </div>
    </div>
  );
};
export default RateList;
