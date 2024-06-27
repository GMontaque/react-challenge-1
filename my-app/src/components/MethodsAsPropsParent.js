import React, { Component } from "react";
import MethodsAsPropsChild from "./MethodsAsPropsChild";

class MethodsAsPropsParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleSignIn = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleSignOut = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  // below code works on the toggle function
  //   handleSignIn = () => {
  //     this.setState({
  //       isLoggedIn: this.state.isLoggedIn === false ? true : false,
  //     });
  //   };

  render() {
    return (
      <div>
        <MethodsAsPropsChild
          isLoggedIn={this.state.isLoggedIn}
          handleSignIn={this.handleSignIn}
          handleSignOut={this.handleSignOut}
        />
      </div>
    );
  }
}

export default MethodsAsPropsParent;
