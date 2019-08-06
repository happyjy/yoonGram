import React, { Component } from "react";
import PhotoComments from "./presenter";

class Container extends Component {
  //debugger;
  render() {
    return <PhotoComments 
      {...this.props} 
      handleRemoveClickEvent={this._handleRemoveClickEvent}
    />;
  }

  _handleRemoveClickEvent = event => {
    //debugger;
    const { handleCommentsClick } = this.props;
    console.log("### this.props: ", this.props);
    console.log("### this.state: ", this.state);
    console.log("### this.event: ", event);

    // const { comment } = this.state;
    // const { key } = event;

    handleCommentsClick(event)

  };
}

export default Container;