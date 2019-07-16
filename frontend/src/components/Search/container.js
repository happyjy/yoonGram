import React, { Component } from "react";
import PropTypes from "prop-types";
import Explore from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };

  static propTypes = {
    searchByTerm: PropTypes.func.isRequired,
    userList: PropTypes.array,
    imageList: PropTypes.array
  };

  componentDidMount() {
    console.log("### search > container.js > componentDidMount :", this.props);
    const { searchByTerm } = this.props;
    searchByTerm();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userList && nextProps.imageList) {
      this.setState({
        laoding: false
      });
    }
  }

  render() {
    const { userList, imageList } = this.props;
    return <Explore {...this.state} userList={userList} imageList={imageList}/>;
  };
}

export default Container;