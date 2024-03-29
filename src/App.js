import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min";
import Parallax from "./components/layout/Parallax";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./components/news/News";
import Documents from "./components/documents/Documents";
import About from "./components/about/About";
import Users from "./components/users/Users";
import Rates from "./components/Rates";
import Footer from "./components/layout/Footer";
import back1 from "./img/DSC_1.jpg";
import back2 from "./img/DSC_201.jpg";
import PasswordUpdate from "./components/users/PasswordUpdate";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import "./styles.css";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Parallax backImg={back1} />
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/rates" component={Rates} />
          <Route exact path="/documents" component={Documents} />} />
          <Route exact path="/news" component={News} />} />
          <Route exact path="/users" component={Users} />} />
          <Route exact path="/users/passupdate" component={PasswordUpdate} />}
          />
          <Route component={News} />} />
        </Switch>
        <Parallax backImg={back2} />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
