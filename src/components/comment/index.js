import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import CommentItem from "./commentItem";

const GET_COMMENTS = gql`
    query Comments($entity: String!, $document: String!) {
        comments(entity: $entity, document: $document) {
            id
            userId
            entity
            document
            text
            parentComment
            createdAt
        }
    }
`;

const INSERT_COMMENT = gql`
    mutation(
        $userId: String!
        $entity: String!
        $document: String!
        $text: String!
        $parentId: String
    ) {
        addComment(
            userId: $userId
            entity: $entity
            document: $document
            text: $text
            parentId: $parentId
        ) {
            id
            entity
            userId
            document
            text
            parentComment
            createdAt
        }
    }
`;

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entity: this.props.entity,
            document: this.props.document,
            comments: [
                {
                    user: { name: "user1" },
                    text: "test comment",
                    createdAt: "14.10.2019 14:10:10"
                },
                {
                    user: { name: "user2" },
                    text: "test comment2",
                    createdAt: "14.10.2019 14:10:10"
                }
            ]
        };
    }
    render() {
        const entity = this.state.entity;
        const document = this.state.document;
        const comments = (entity, document) => (
            <Query
                query={GET_COMMENTS}
                variables={{ entity: entity, document: document }}
            >
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;
                    return (
                        <React.Fragment>
                            <textarea style={{ width: "100%" }} />
                            <br />
                            <div style={{ textAlign: "right" }}>
                                <a href="#" className="btn btn-primary">
                                    Submit comment
                                </a>
                            </div>
                            <br />
                            <ul className="list-group list-group-flush">
                                {this.state.comments.map((comment, i) => {
                                    return (
                                        <CommentItem
                                            key={i}
                                            comment={comment}
                                        />
                                    );
                                })}
                            </ul>
                        </React.Fragment>
                    );
                }}
            </Query>
        );
        return <div>{comments(entity, document)}</div>;
    }
}

export default Comments;
