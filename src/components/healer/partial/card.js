import React from "react";
import "../healer.scss";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faMapMarkerAlt,
  faAt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const images = require.context("assets/images/healers", true);

const HealerCard = props => {
  return (
    <div className="card healer-card">
      <img
        className="card-img-top"
        src={images(`./${props.healer.photo}`)}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">
          {props.healer.name}
        </h5>
        <p className="card-text">
          {props.healer.description}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <FontAwesomeIcon icon={faPhone} />+421 907 056 052
        </li>
        <li className="list-group-item">
          <FontAwesomeIcon icon={faAt} />example@example.com
        </li>
        <li className="list-group-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Home <br />
          Example Street 15 <br />
          PL 12130; Katowice <br />
          Poland
        </li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Contact him
        </a>
        <a href="#" className="card-link">
          Save as favourite
        </a>
      </div>
    </div>
  );
};

HealerCard.propTypes = {
  healer: PropTypes.object.isRequired
};

export default HealerCard;
