import React from "react";
import moment from "moment";
import userAgreement from "../documents/user.docx";
const Footer = () => {
  return (
    <footer className="page-footer  blue lighten-1">
      <div className="container">
        <div className="row">
          <div className="col  s12">
            <h5 className="white-text">
              Санкт-Петербург, Парашютная 61 кор. 3, лит А
            </h5>
            <p className="grey-text text-lighten-4">email: gsksh3@mail.ru</p>
            <a href="https://vk.com/gskshuvalovskiy_3">
              <i className="fab fa-vk" style={{ color: "white" }}></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <p>© {moment(Date.now()).format("YYYY")} ГСК3</p>
          <a style={{ color: "white" }} href={userAgreement}>
            Пользовательское соглашение
          </a>
          <p>По вопросам работы сайта обращаться gsksh3@mail.ru</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
