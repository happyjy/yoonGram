import React, { Component }from "react";
import PropTypes from "prop-types";
import SignForm from "./presenter";

// const Container = props => <SignForm {...props} />

class Container extends Component {
  state = {
    email: "",
    fullName: "", 
    username: "", 
    password: ""
  }
  static propTypes = {
    facebookLogin: PropTypes.func.isRequired
  };
  render() {
    const { email, fullName, username, password } = this.state;
    return <SignForm 
      emailValue={email}
      fullNameValue={fullName}
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
    event.preventDefault();
    console.log("### submit btn > this.state value : ", this.state)
  }
  _handleFacebookLogin = response => {
    console.log("### _handleFacebookLogin > response value : ", response);
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  }
}

export default Container;