import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";
import "./app.scss";
import Menu from "../menu";
import { Switch, Link, Route } from "react-router-dom";
import Routes from "./routes";
import HealerCard from "../healer/partial/card";
import Healers from "../healer";
import Contact from "components/contact";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faMapMarkerAlt,
  faAt
} from "@fortawesome/free-solid-svg-icons";
import { LocalizeProvider } from "react-localize-redux";
import { Provider } from "react-redux";
import store from "./store";

//const store = createStore();

library.add(faPhone, faMapMarkerAlt, faAt, faFacebook);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LocalizeProvider>
          <BrowserRouter>
            <div className="App">
              <Menu />
              <div className="container">
                <Route exact path="/" component={Contact} />
                <Route path="/healer" component={HealerCard} />
                <Route path="/healers" component={Healers} />
              </div>
            </div>
          </BrowserRouter>
        </LocalizeProvider>
      </Provider>
    );
  }
}

export default App;
