import React, { Component } from "react";
import Feed from "./presenter";

class Container extends Component{
  //loading value를 통해서 Loading Component를 생성한다. 
  state = {
    loading:true
  }

  render() {
    return <Feed {...this.state}/>
  };
}

export default Container;