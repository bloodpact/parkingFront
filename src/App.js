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
import Meetings from "./components/Meetings";
import Rates from "./components/Rates";
import Footer from "./components/layout/Footer";
import back1 from "./img/i1.jpg";
import back2 from "./img/i2.jpg";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

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
          <Route exact path="/meetings" component={Meetings} />} />
        </Switch>
        <Parallax backImg={back2} />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
