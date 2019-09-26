import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min";
import Parallax from "./components/layout/Parallax";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./components/news/News";
import Documents from "./components/documents/Documents";
import About from "./components/About";
import Meetings from "./components/Meetings";
import Rates from "./components/Rates";
import Footer from "./components/Footer";
import back1 from "./img/back1.jpg";
import back2 from "./img/back2.jpg";
import "./App.css";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
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
  );
}

export default App;
