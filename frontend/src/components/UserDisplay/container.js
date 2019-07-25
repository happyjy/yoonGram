import React, { Component } from "react";
import UserRow from "./presenter";

// console.log("### UserDisplay > container.js: ", this);
// const Container = props => <UserRow {...props} />;

class Container extends Component {

  render() {
    // const { userList, imageList } = this.props;
    console.log("### UserDisplay > container.js: ", this.props.user);
    return (
      <UserRow {...this.props} />
    );
  };
}


export default Container;