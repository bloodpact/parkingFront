import React from "react";

const Rates = () => {
  return (
    <div className="section white">
      <div className="row container">
        <h1 className="header">Тарифы</h1>
        <table className={"striped"}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Item Name</th>
              <th>Item Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Test1</td>
              <td>Test1 name</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Test2</td>
              <td>Test2 name</td>
              <td>3.76</td>
            </tr>
            <tr>
              <td>Test3</td>
              <td>Test3 name</td>
              <td>$7.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rates;
