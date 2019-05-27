import React, { Component } from "react";
import "./healer.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import healerActions from "./actions";

class Healers extends Component {
  componentWillMount() {
    console.log("asdad");
    console.log(this.props);
    this.props.list();
  }

  /* componentWillReceiveProps(nextProps) {
    if (nextProps.newHealer) {
      this.props.healers.unshift(nextProps.newHealer);
    }
  }*/

  render() {
    const healerCards = this.props.healers.map(healer =>
      <div key={healer.id}>
        <h3>
          {healer.name}
        </h3>
        <p>
          {healer.description}
        </p>
      </div>
    );
    return (
      <div>
        Healers index<br />
        {healerCards}
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

console.log("lulz");
console.log(healerActions);
export default connect(mapStateToProps, healerActions)(Healers);
