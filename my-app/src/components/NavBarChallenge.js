import React, { Component } from "react";

class NavBarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  showForm = () => {
    this.setState({
      isLoggedIn: this.state.isLoggedIn === false ? true : false,
    });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1>My Gallery </h1>

          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={this.showForm}
          >
            log in
          </button>
        </nav>

        <h1>header</h1>
        {this.state.isLoggedIn ? (
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              onClick={this.showForm}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        ) : null}
      </div>
    );
  }
}

export default NavBarChallenge;
