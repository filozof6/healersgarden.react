import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import HealerCard from "./card";
import PropTypes from "prop-types";

const GET_HEALER = gql`
    query Healer($healerId: String!) {
        healer(id: $healerId) {
            id
            name
            description
            photo
        }
    }
`;

class Read extends Component {
    constructor(props) {
        super(props);
        this.state = { healerId: this.props.match.params.id };
    }
    render() {
        const healerId = this.state.healerId;
        const healer = ({ healerId }) => (
            <Query
                query={GET_HEALER}
                variables={{ healerId: this.state.healerId }}
                notifyOnNetworkStatusChange
            >
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;
                    return (
                        <HealerCard key={data.healer.id} healer={data.healer} />
                    );
                }}
            </Query>
        );
        return <div>{healer(healerId)}</div>;
    }
}

export default Read;
