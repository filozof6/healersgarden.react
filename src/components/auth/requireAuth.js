import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            console.debug("this.props");
            console.debug(this.props.router);
            if (!this.props.authenticated) {
                this.props.history.push("/login");
            }
        }

        componentWillUpdate(nextProps) {
            if (!this.props.authenticated) {
                this.props.history.push("/login");
            }
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.auth.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}
