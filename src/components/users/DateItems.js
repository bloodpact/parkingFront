import * as React from "react";
import RateList from "./RateList";
import DateItem from "./DateItem";
import { NavLink } from "react-router-dom";

export const DateItems = () => {
  return (
    <div className="row container">
      <NavLink to="/users/passupdate" activeClassName="active">
        Обновить пароль
      </NavLink>
      <DateItem />
      <RateList />
    </div>
  );
};
export default DateItems;
