import * as React from "react";

export const DateItem = () => {
  return (
    <div>
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s3">
            <a className="active" href="#2019">
              2019
            </a>
          </li>
        </ul>
      </div>
      <div id="2019" className="col s12">
        <ul className="tabs">
          <li className="tab col s3">
            <a className="active" href="#jan">
              Январь
            </a>
          </li>
          <li className="tab col s3">
            <a className="active" href="#feb">
              Февраль
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DateItem;
