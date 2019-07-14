import React, { Component } from "react";
import PropTypes from "prop-types";
import Explore from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };

  render() {
    return <Explore {...this.state} />;
  }
}

export default Container;