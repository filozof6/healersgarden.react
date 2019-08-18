import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import HealerCard from "./card";
import {
    faPhone,
    faMapMarkerAlt,
    faAt,
    faStar,
    faHeart,
    faThumbsUp,
    faUser,
    faThumbsDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Comments from "components/comment/index";
const images = require.context("assets/images/healers", true);

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
                        <div className="row">
                            <div className="col-md-4 col-xs-12">
                                <div className="card">
                                    <img
                                        className="card-img-top"
                                        src={images(`./${data.healer.photo}`)}
                                        alt="Card image cap"
                                    />
                                    <div className="card-body">
                                        0 &nbsp;
                                        <FontAwesomeIcon icon={faHeart} />
                                        &nbsp; 0 &nbsp;
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                        &nbsp; 0 &nbsp;
                                        <FontAwesomeIcon icon={faThumbsDown} />
                                    </div>
                                    <div className="card-body">
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faHeart} />
                                            &nbsp; Save
                                        </a>
                                        &nbsp;
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon
                                                icon={faThumbsUp}
                                            />
                                            &nbsp; Like
                                        </a>
                                        &nbsp;
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon
                                                icon={faThumbsDown}
                                            />
                                            &nbsp; Dislike
                                        </a>
                                    </div>
                                </div>
                                <br />
                            </div>
                            <div className="col-md-8 col-xs-12">
                                <div className="card">
                                    <div className="card-header">
                                        {data.healer.name}
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">
                                            {data.healer.description}
                                        </p>

                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                />
                                                &nbsp; +421 907 056 052
                                            </li>
                                            <li className="list-group-item">
                                                <FontAwesomeIcon
                                                    icon={faPhone}
                                                />
                                                &nbsp; +421 907 056 052
                                            </li>
                                            <li className="list-group-item">
                                                <FontAwesomeIcon icon={faAt} />
                                                &nbsp; example@example.com
                                            </li>
                                            <li className="list-group-item">
                                                <FontAwesomeIcon
                                                    icon={faMapMarkerAlt}
                                                />
                                                &nbsp; Home <br />
                                                Example Street 15 <br />
                                                PL 12130; Katowice <br />
                                                Poland
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <br />
                                <div className="card">
                                    <div className="card-header">Comments</div>
                                    <div className="card-body">
                                        <Comments
                                            entity="Healers"
                                            document="5d2b2a69971bba67e01e3c46"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Query>
        );
        return <div>{healer(healerId)}</div>;
    }
}

export default Read;
