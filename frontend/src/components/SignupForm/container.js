import React, { Component }from "react";
import SignForm from "./presenter";

// const Container = props => <SignForm {...props} />

class Container extends Component {
  state = {
    email: "",
    fullName: "", 
    username: "", 
    password: ""
  }
  render() {
    const { email, fullName, username, password } = this.state;
    return <SignForm 
      emailValue={email}
      fullNameValue={fullName}
      usernameValue={username}
      passwordValue={password}
      handleInputChange={this._handleInputChange}
      handleSubmit={this._handleSubmit}/>
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
}

export default Container;