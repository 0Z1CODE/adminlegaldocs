import React, { Component } from "react";
import PropTypes from "prop-types";

class TrotlingBlocks extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="trotling-holder d-flex flex-column">
          <div className="trotling-line my-2"></div>
          <div className="trotling-line my-2"></div>
          <div className="trotling-line my-2"></div>
          <div className="trotling-line my-2"></div>
          <div className="trotling-line my-2"></div>
        </div>
      </>
    );
  }
}

export default TrotlingBlocks;
