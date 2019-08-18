import React from "react";
import "./comment.scss";
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

function CommentItem(props) {
    console.debug("commentItem", props);
    return (
        <div className="list-group-item">
            {props.comment.text}
            <br />
            <small
                style={{
                    display: "block",
                    textAlign: "right",
                    marginTop: 5
                }}
            >
                <FontAwesomeIcon icon={faUser} />
                &nbsp;
                {props.comment.user.name}&nbsp; {props.comment.createdAt}
            </small>
        </div>
    );
}

export default CommentItem;
