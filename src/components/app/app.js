import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./app.scss";
import Menu from "../menu";
import { Switch, Route } from "react-router-dom";
import HealerCard from "../healer/partial/card";
import Healers from "../healer";
import Contact from "components/contact";
import { BrowserRouter } from "react-router-dom";

import { LocalizeProvider } from "react-localize-redux";
import { Provider } from "react-redux";
import store from "./store";

//const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LocalizeProvider>
          <BrowserRouter>
            <div className="App">
              <Menu />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Contact} />
                  <Route path="/healer" component={HealerCard} />
                  <Route path="/healers" component={Healers} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </LocalizeProvider>
      </Provider>
    );
  }
}

export default App;
