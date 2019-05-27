import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../healer.scss";
import Menu from "components/menu";

function HealerCard() {
  return (
    <div className="card healer-card">
      <img
        className="card-img-top"
        src={require(`assets/images/healers/edgar-centro.jpg`)}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Healers name</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <FontAwesomeIcon icon="faPhone" />+421 907 056 052
        </li>
        <li className="list-group-item">
          <FontAwesomeIcon icon="faAt" />example@example.com
        </li>
        <li className="list-group-item">
          <FontAwesomeIcon icon="faMapMarkerAlt" /> Home <br />
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
}

export default HealerCard;
