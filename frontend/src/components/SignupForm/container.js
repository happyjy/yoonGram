import React, { Component }from "react";
import PropTypes from "prop-types";
import SignForm from "./presenter";

// const Container = props => <SignForm {...props} />

class Container extends Component {
  state = {
    email: "",
    name: "", 
    username: "", 
    password: ""
  }
  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired
  };
  render() {
    const { email, name, username, password } = this.state;
    return <SignForm 
      emailValue={email}
      nameValue={name}
      usernameValue={username}
      passwordValue={password}
      handleInputChange={this._handleInputChange}
      handleSubmit={this._handleSubmit}
      handleFacebookLogin={this._handleFacebookLogin}/>
  }
  _handleInputChange = event => {
    const { target : { value, name }} = event;
      this.setState({
        [name]: value
      });
      console.log("### this.state", this.state)
  }
  _handleSubmit = event => {
    console.log("### submit btn > this.state value : ", this.state)
    const { email, name, password, username } = this.state;
    const { createAccount } = this.props;
    createAccount(username, password, email, name);
    event.preventDefault();
  }
  _handleFacebookLogin = response => {
    console.log("### _handleFacebookLogin > response value : ", response);
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  }
}

export default Container;