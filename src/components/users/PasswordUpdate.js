import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updPass } from "../../actions/userActions";

export function PasswordUpdate({ user: { user, logged }, updPass, history }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (!logged) {
      history.push("/users");
    } else {
      setId(user.id);
    }
    //eslint-disable-next-line
  }, [id]);
  function onClick() {
    updPass({ id, password });
    console.log(id);
    setId("");
    setPassword("");
    history.push("/users");
  }
  return (
    <div className="row container">
      <form className="col s12">
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
        <a href="#!" className="waves-effect waves-light btn" onClick={onClick}>
          ОТПРАВИТЬ
        </a>
      </form>
    </div>
  );
}
const mapStateToProps = state => ({
  user: state.user,
  logged: state.logged
});
export default connect(
  mapStateToProps,
  { updPass }
)(PasswordUpdate);
