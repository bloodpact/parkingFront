import * as React from "react";
import RateList from "./RateList";
import DateItem from "./DateItem";

export const DateItems = () => {
  return (
    <div className="row container">
      <DateItem />
      <RateList />
    </div>
  );
};
export default DateItems;
