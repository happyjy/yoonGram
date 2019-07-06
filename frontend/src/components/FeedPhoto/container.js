import React, { Component } from "react";
// import PropTypes from "prop-types";
import FeedPhoto from "./presenter";

// const Container = props => <FeedPhoto {...props}></FeedPhoto>
class Container extends Component {
  state = {
    seeingLikes: false
  }
  render() {
    return (
      <FeedPhoto 
        {...this.props}
        {...this.state}
        openLikes={this._openLikes}
        closeLikes={this._closeLikes}
      />
    )
  }
  _openLikes = () => {
    this.setState({
      seeingLikes: true
    });
  }
  _closeLikes = () => {
    this.setState({
      seeingLikes: false
    });
  }
}

export default Container;