import React, { Component } from "react";
import Auth from "./presenter";

class Container extends Component {
  state = {
    actions: "login"
  }

  render() {
    const { action } = this.state;
    return <Auth actions={action} changeActions={this._changeAction} />;
  }
  _changeAction = () => {
    this.setState(prevState => {
      const { actions } = prevState;
      if(actions === "login"){
        return {
          actions: "signup"
        }
      } else if(actions === "signup"){
        return {
          actions: "login"
        }
      }
    });
  }
}

export default Container;