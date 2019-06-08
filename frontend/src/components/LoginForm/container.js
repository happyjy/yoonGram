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
      handleInputChange={this._handleInputChange}
      handleSubmit={this._handleSubmit}
      usernameValue={username} 
      passwordValue={password} />
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
}

export default Container;