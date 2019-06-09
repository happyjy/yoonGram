import React, { Component } from "react";
import LoginForm from "./presenter";

// const Container = props => <LoginForm {...props} />;

class Container extends Component {
  state = {
    username: "",
    password: "" 
  }
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
    event.preventDefault();
    console.log("### submit btn > this.state value : ", this.state)
    //redux will be here
  }
  _handleFacebookLogin = response => {
    //Pass response value(inclue access token) to redux and api
    console.log("### _handleFacebookLogin > response value : ", response);
  }
}

export default Container;