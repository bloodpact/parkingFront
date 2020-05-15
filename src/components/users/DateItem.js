import * as React from "react";
import UserTaxData from "./UserTaxData";
import RateList from "./RateList";

export const DateItem = ({ years, dataTable, taxData }) => {
  return (
    <div>
      <ul className="collapsible">
        {years.map(yItem => (
          <li key={"fullDate" + yItem}>
            <div className="collapsible-header">
              <i className="material-icons">date_range</i> {yItem}
            </div>
            <div className="collapsible-body">
              <ul className="collapsible">
                {taxData.map(tItem => {
                  const filtered = dataTable.filter(
                    el => el.date === tItem.date
                  );
                  // if (tItem.date.split("-")[0] === yItem) {
                  return (
                    <li key={tItem.date}>
                      <div className="collapsible-header">
                        <i className="material-icons">event</i>
                        {tItem.date}
                      </div>
                      <div className="collapsible-body">
                        <UserTaxData taxData={tItem} />
                        <RateList dataTable={filtered} />
                      </div>
                    </li>
                  );
                  // }
                })}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DateItem;
