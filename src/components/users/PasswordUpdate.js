import * as React from "react";
export const PasswordUpdate = () => {
  return (
    <div className="row container">
      <form action="">
        <div className="input-field col s6">
          <input id="password" type="text" className="validate" />
          <label htmlFor="password">Новый пароль</label>

          <a href="#!" className="waves-effect waves-light btn">
            ОТПРАВИТЬ
          </a>
        </div>
      </form>
    </div>
  );
};
export default PasswordUpdate;
