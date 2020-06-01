import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTableData } from "../../actions/tableDataActions";
import Preloader from "../layout/Preloader";
import M from "materialize-css/dist/js/materialize.min";
import DateItem from "./DateItem";
import { NavLink } from "react-router-dom";
import { askAct } from "../../actions/userActions";
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

  const clickHandler = () => {
    if (userData.email) {
      askAct({ place: userData.number, email: userData.email });
      M.toast({
        html: `Запрос отправлен, ответ будет отправлен на ${userData.email}`
      });
    } else {
      M.toast({ html: `Email не обнаружен, обновите данные` });
    }
  };
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
  return (
    <div className="row container">
      <NavLink
        className="waves-effect waves-light btn"
        to="/users/passupdate"
        activeClassName="active"
      >
        Обновить пароль/email
      </NavLink>
      <button
        onClick={clickHandler}
        className="ml1 waves-effect waves-light btn"
      >
        Запросить акт сверки
      </button>
      <DateItem
        years={years}
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
