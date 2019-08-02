import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./app.scss";
import Menu from "../menu";
import { Switch, Route } from "react-router-dom";
import HealerCard from "../healer/partial/card";
import HealerRead from "../healer/partial/read";
import Healers from "../healer";
import Contact from "components/contact";
import Login from "./login";
import { BrowserRouter } from "react-router-dom";

import { LocalizeProvider } from "react-localize-redux";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./apolloClient";
import { Provider } from "react-redux";
import store from "./store";

//const store = createStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <LocalizeProvider>
                    <BrowserRouter>
                        <ApolloProvider client={apolloClient}>
                            <div className="App">
                                <Menu />
                                <div className="container">
                                    <Switch>
                                        <Route
                                            exact
                                            path="/"
                                            component={Contact}
                                        />
                                        <Route
                                            path="/healer/:id"
                                            component={HealerRead}
                                        />
                                        <Route
                                            path="/healers"
                                            component={Healers}
                                        />
                                        <Route
                                            path="/login"
                                            component={Login}
                                        />
                                    </Switch>
                                </div>
                            </div>
                        </ApolloProvider>
                    </BrowserRouter>
                </LocalizeProvider>
            </Provider>
        );
    }
}

export default App;
