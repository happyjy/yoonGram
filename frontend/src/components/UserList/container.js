import React, { Component } from "react";
import UserList from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    // console.log("### UserList > container.js > componentDidMount > nextProps : ");
    const { userList } = this.props;
    if (userList) {
      this.setState({ loading: false });
    }
  }
  componentWillReceiveProps(nextProps) {
    // console.log("### UserList > container.js > componentWillReceiveProps > nextProps : ", nextProps);
    if (nextProps.userList) {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    console.log("### UserList > container.js > render() > this.props, this.state: ", this.props, this.state);
    return <UserList {...this.props} {...this.state} />;
  }
}

export default Container;