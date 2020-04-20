import React, { useState } from "react";
import { logUser } from "../../actions/userActions";
import { connect } from "react-redux";

const UserLoginForm = ({ user: { error }, logUser }) => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    logUser({ number, password });
    setNumber("");
    setPassword("");
  }
  return (
    <div className="row container">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
              onChange={e => setNumber(e.target.value)}
              required
              id="number"
              type="text"
              name={"number"}
              value={number}
              className="validate"
            />
            <label htmlFor="number">Номер места</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              onChange={e => setPassword(e.target.value)}
              id="password"
              required
              name={"password"}
              type="password"
              value={password}
              className="validate"
            />
            <label htmlFor="password">Пароль</label>
            {error ? <p>{error}</p> : <p></p>}
          </div>
        </div>
        <a
          href="#!"
          className="waves-effect waves-light btn"
          onClick={onSubmit}
        >
          ЗАЙТИ В ЛИЧНЫЙ КАБИНЕТ
        </a>
      </form>
    </div>
  );
};
const mapStateToProps = state => ({
  user: state.user,
  error: state.error
});
export default connect(
  mapStateToProps,
  { logUser }
)(UserLoginForm);
