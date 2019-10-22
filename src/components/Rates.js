import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRates } from "../actions/ratesActions";

import M from "materialize-css/dist/js/materialize.min";

const Rates = ({ rates: { rates }, getRates, loading }) => {
  useEffect(() => {
    getRates();
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    M.AutoInit();
  });
  if (loading || rates === null) {
    return <div>Loading</div>;
  }

  return (
    <div className="section white">
      <div className="row container">
        <h1 className="header">Тарифы</h1>
        <ul className="collapsible popout">
          <li>
            <div className="collapsible-header">
              <i className="material-icons">account_balance</i>Вступительные
              взносы
            </div>
            <div className="collapsible-body">
              <p>
                Вступительный взнос уплачивается единоразово при вступлении в
                кооператив. Вступительный взнос направляется на содержание
                Кооператива, покрытие расходов, связанных с организацией приема
                в члены Кооператива, оформление документов, ведение деятельности
                Кооператива в соответствии с целями его создания. (п. 5.1.1
                Устава)
              </p>
              <p>7 500 р.</p>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">account_balance</i>Членские взносы
            </div>
            <div className="collapsible-body">
              <table>
                <thead>
                  <tr>
                    <th>Месяц</th>
                    <th>Сумма</th>
                  </tr>
                </thead>
                <tbody>
                  {rates.reverse().map(rate => (
                    <tr key={rate.id}>
                      <td>{rate.month}</td>
                      <td>{rate.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  rates: state.rates
});
export default connect(
  mapStateToProps,
  { getRates }
)(Rates);
