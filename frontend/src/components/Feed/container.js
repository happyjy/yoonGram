import React, { Component } from "react";
import PropTypes from "prop-types";
import Feed from "./presenter";

class Container extends Component {
  //loading value를 통해서 Loading Component를 생성한다.
  state = {
    loading: true,
  };

  static propTypes = {
    getFeed: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getFeed } = this.props;
    console.log(
      "### Feed > container.js > componentDidMount > props: ",
      this.props
    );
    if (!this.props.feed) {
      console.log(
        "### Feed > container.js > componentDidMount > this.props.feed 없으면 수행 (getFeed 수행): ",
        this.props.feed
      );
      getFeed();
      // console.log("-----------------------", getFeed());
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  componentWillReceiveProps = (nextProps) => {
    console.log(
      "### Feed > container.js > componentWillReceiveProps > this.props, nextProps : ",
      this.props,
      nextProps
    );
    if (nextProps.feed) {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    console.log(
      "### Feed > continaer.js > render > this.props(component property):",
      this.props
    );
    console.log(
      "### Feed > continaer.js > render > this.state(component 상태): ",
      this.state
    );
    const { feed } = this.props;
    return <Feed {...this.state} feed={feed} />;
  }
}

export default Container;
