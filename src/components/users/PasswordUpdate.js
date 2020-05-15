import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updPass, updEmail } from "../../actions/userActions";
import M from "materialize-css/dist/js/materialize.min";

export function PasswordUpdate({
  user: { user, logged },
  updPass,
  updEmail,
  history
}) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (!logged) {
      history.push("/users");
    }
    //eslint-disable-next-line
  }, []);
  function updatePassword() {
    if (password.length < 6) {
      M.toast({ html: `Пароль не может быть короче 6 символов` });
    } else {
      updPass({ id: user.id || user._id, password });
      setPassword("");
      M.toast({ html: `Пароль обновлен` });
      history.push("/users");
    }
  }
  function updateEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      M.toast({ html: `Введите валидный email` });
    } else {
      updEmail({ id: user.id || user._id, email });
      // setPassword("");
      M.toast({ html: `Email обновлен` });
      history.push("/users");
    }
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
            <label htmlFor="password">Новый пароль</label>
            <a
              href="#!"
              className="waves-effect waves-light btn"
              onClick={updatePassword}
            >
              ОБНОВИТЬ ПАРОЛЬ
            </a>
          </div>
        </div>
      </form>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
              onChange={e => setEmail(e.target.value)}
              id="email"
              name={"email"}
              type="email"
              value={email}
              className="validate"
            />
            <label htmlFor="email">Новый Email</label>
            <a
              href="#!"
              className="waves-effect waves-light btn"
              onClick={updateEmail}
            >
              ОБНОВИТЬ EMAIL
            </a>
            <p>
              Текущий email: {user.email ? user.email : "email отсутствует"}
            </p>
          </div>
        </div>
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
  { updPass, updEmail }
)(PasswordUpdate);
