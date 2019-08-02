import React, { Component } from "react";
import "./healer.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import healerActions from "./actions";
import HealerCard from "./partial/card";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_HEALERS = gql`
    {
        healers {
            id
            name
            description
            photo
        }
    }
`;

class Healers extends Component {
    componentWillMount() {
        console.log("asdad");
        console.log(this.props);
        this.props.list();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newHealer) {
            this.props.healers.unshift(nextProps.newHealer);
        }
    }

    render() {
        const healerCards = this.props.healers.map(healer => (
            <HealerCard key={healer.id} healer={healer} />
        ));
        console.log("data2");

        const healers = ({ onDogSelected }) => (
            <Query query={GET_HEALERS}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;
                    console.log("data");
                    console.log(data);
                    return (
                        <React.Fragment>
                            {data.healers.map(healer => (
                                <HealerCard key={healer.id} healer={healer} />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Query>
        );
        return (
            <div>
                <h1>Healers index</h1>
                <div className="healers">
                    <Query query={GET_HEALERS}>
                        {({ loading, error, data }) => {
                            if (loading) return "Loading...";
                            if (error) return `Error! ${error.message}`;
                            console.log("data");
                            console.log(data);
                            return (
                                <React.Fragment>
                                    {data.healers.map(healer => (
                                        <HealerCard
                                            key={healer.id}
                                            healer={healer}
                                        />
                                    ))}
                                </React.Fragment>
                            );
                        }}
                    </Query>
                </div>
            </div>
        );
    }
}

Healers.propTypes = {
    healers: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    healers: state.healers.items
});

export default connect(
    mapStateToProps,
    healerActions
)(Healers);
