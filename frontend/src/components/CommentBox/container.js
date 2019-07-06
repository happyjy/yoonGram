import React, { Component } from "react";
import CommentBox from "./presenter";

class Container extends Component {
  state = {
    comment: ""
  };
  
  render() {
    console.log("### : ", this.state, this.props);
    return (
      <CommentBox
        {...this.state}
        {...this.props}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleKeyPress={this._handleKeyPress}
      />
    );
  }
  _handleInputChange = event => {
    const { target: { value } } = event;
    this.setState({
      comment: value
    });
  };
  _handleSubmit = () => {
    console.log(this.state);
  };
  _handleKeyPress = event => {
    const { submitComment } = this.props;
    const { comment } = this.state;
    const { key } = event;
    if (key === "Enter") {
      event.preventDefault();
      submitComment(comment);
      this.setState({
        comment: ""
      });
    }
  };
}

export default Container;