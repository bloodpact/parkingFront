import React, { useState } from "react";

const Footer = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredFeedback, setEnteredFeedback] = useState("");
  const sendMail = e => {
    e.preventDefault();
  };

  return (
    <footer className="page-footer  blue lighten-1">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div className="col l6 s12" style={{ display: "none" }}>
            <h5 className="white-text">Lorem ipsum dolor.</h5>
            <form className="test-mailing" onSubmit={sendMail}>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    id="name"
                    type="text"
                    className="validate"
                    value={enteredName}
                    onChange={e => {
                      setEnteredName(e.target.value);
                    }}
                  />
                  <label htmlFor="name">Имя</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    value={enteredEmail}
                    onChange={e => {
                      setEnteredEmail(e.target.value);
                    }}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      id="feedback"
                      className="materialize-textarea"
                      value={enteredFeedback}
                      onChange={e => {
                        setEnteredFeedback(e.target.value);
                      }}
                    />
                    <label htmlFor="feedback">Сообщение</label>
                  </div>
                  <button type="submit">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2019 ГСК3</div>
      </div>
    </footer>
  );
};

export default Footer;
