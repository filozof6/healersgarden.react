import React, { Component } from "react";
import "./healer.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import healerActions from "./actions";
import HealerCard from "./partial/card";

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
      <HealerCard key={healer.id} healer={healer} />
    );
    return (
      <div>
        <h1>Healers index</h1>
        <div className="healers">
          {healerCards}
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

export default connect(mapStateToProps, healerActions)(Healers);
