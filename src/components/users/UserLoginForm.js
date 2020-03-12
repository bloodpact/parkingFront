import React, { useState } from "react";
import { logUser } from "../../actions/userActions";
import { connect } from "react-redux";

const UserLoginForm = ({ logUser }) => {
  // const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  function onSubmit() {
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
              name={"password"}
              type="password"
              value={password}
              className="validate"
            />
            <label htmlFor="password">Пароль</label>
          </div>
        </div>
        <a
          href="#!"
          className="waves-effect waves-light btn"
          onClick={onSubmit}
        >
          ОТПРАВИТЬ
        </a>
      </form>
    </div>
  );
};
// const mapStateToProps = state => ({
//   logged: state.logged,
//   user: state.user
// });
export default connect(
  null,
  { logUser }
)(UserLoginForm);
