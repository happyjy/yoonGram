import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginForm from "./presenter";

// const Container = props => <LoginForm {...props} />;

class Container extends Component {
  state = {
    username: "",
    password: "",
    
  }
  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    usernameLogin: PropTypes.func.isRequired
  };
  render() {
    const { username, password } = this.state;
    return <LoginForm
      usernameValue={username} 
      passwordValue={password}
      handleInputChange={this._handleInputChange}
      handleSubmit={this._handleSubmit}
      handleFacebookLogin={this._handleFacebookLogin} />
  }
  _handleInputChange = event => {
    const { target : { value, name } } = event;
    this.setState({
      [name]: value // [name]: event.value
    });

    // # STUDY: this.state comes from props value of presenter
    console.log("### this.state", this.state)

    // console.log("### value, name ", value, name)

    // console.log("### LoginForm container > LoginForm > event.target.name: ", event.target.name);
    // console.log("### LoginForm container > LoginForm > event.target.value: ", event.target.value);
  }
  _handleSubmit = event => {
    console.log("### submit btn > this.state value : ", this.state);
    console.log("### submit btn > this.props value : ", this.props);
    const { usernameLogin } = this.props;
    const { username, password } = this.state;
    event.preventDefault();
    usernameLogin(username, password);
    //redux will be here

  }
  _handleFacebookLogin = response => {
    //Pass response value(inclue access token) to redux and api
    console.log("### _handleFacebookLogin > response value : ", response);
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  }
}

export default Container;