import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTableData } from "../../actions/tableDataActions";
import Preloader from "../layout/Preloader";
import M from "materialize-css/dist/js/materialize.min";
import DateItem from "./DateItem";
import { NavLink } from "react-router-dom";
import * as _ from "lodash";

export const DateItems = ({
  userData,
  dataTable: { dataTable, loading },
  getTableData,
  logout
}) => {
  useEffect(() => {
    M.AutoInit();
  });
  useEffect(() => {
    getTableData();
    //eslint-disable-next-line
  }, []);
  const getPartOfDate = (array, placeInArr) => {
    return _.uniq(
      array.map(el => {
        return el.date.split("-")[placeInArr];
      })
    );
  };

  if (loading || dataTable === null) {
    return <Preloader />;
  }
  const years = getPartOfDate(dataTable, 0);
  const months = getPartOfDate(dataTable, 1);
  return (
    <div className="row container">
      <NavLink to="/users/passupdate" activeClassName="active">
        Обновить пароль
      </NavLink>
      <DateItem
        years={years}
        months={months}
        dataTable={dataTable}
        taxData={userData.taxData}
      />
      <button className="waves-effect waves-light btn" onClick={logout}>
        Выйти
      </button>
    </div>
  );
};
const mapStateToProps = state => ({
  dataTable: state.dataTable
});
export default connect(
  mapStateToProps,
  { getTableData }
)(DateItems);
