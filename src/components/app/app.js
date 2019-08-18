import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./app.scss";
import Menu from "../menu";
import { Switch, Route } from "react-router-dom";
import HealerRead from "../healer/partial/read";
import Healers from "../healer";
import Contact from "components/contact";
import Login from "../auth/singInPage";
import Register from "../auth/singUpPage";
import { Router } from "react-router-dom";
import requireAuth from "../auth/requireAuth";
import NoMatch from "./noMatch";
import Home from "./home";

import { LocalizeProvider } from "react-localize-redux";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./apolloClient";
import { Provider } from "react-redux";
import store from "./store";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();
//const store = createStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <LocalizeProvider>
                    <Router history={history}>
                        <ApolloProvider client={apolloClient}>
                            <div className="App">
                                <Menu />
                                <div className="container">
                                    <Switch>
                                        <Route
                                            exact
                                            path="/"
                                            component={Home}
                                        />
                                        <Route
                                            exact
                                            path="/contact"
                                            component={Contact}
                                        />
                                        <Route
                                            path="/healer/:id"
                                            component={HealerRead}
                                        />
                                        <Route
                                            path="/healers"
                                            component={requireAuth(
                                                Healers,
                                                this.props
                                            )}
                                        />
                                        <Route
                                            path="/Register"
                                            component={Register}
                                        />
                                        <Route
                                            path="/login"
                                            component={Login}
                                        />
                                        <Route component={NoMatch} />
                                    </Switch>
                                </div>
                            </div>
                        </ApolloProvider>
                    </Router>
                </LocalizeProvider>
            </Provider>
        );
    }
}

export default App;
