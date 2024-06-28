import React, { Component } from "react";
import css from "./css/NavBarForm.module.css";
import NavBarChild from "./NavBarChild";

class NavBarForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true,
		};
	}

	// best pratice
	handleButtonClick = () => {
		this.setState(
			(prevState) => ({
				isLoggedIn: prevState.isLoggedIn ? false : true,
			}),
			() => console.log(this.state.isLoggedIn)
		);
	};

	// not best pratice
	// handleButtonClick = () => {
	// 	this.setState({
	// 		isLoggedIn: this.state.isLoggedIn === false ? true : false,
	// 	});
	// };

	render() {
		return (
			<div className={css.NavBar}>
				<h1>My Gallery</h1>

				{/* *************** inital code for parts 1-8 **************** */}
				{/* {
                    this.state.isLoggedIn ? 
                        <button onClick={() => this.handleButtonClick()}>Login</button>
                        : 
                        <form>
                            <label htmlFor = "username">Username:</label>
                            <input placeholder="username" id="username"/>
                            
                            <label htmlFor = "password">Password:</label>
                            <input placeholder="password" id="password"/>
                            <button onClick={() => this.handleButtonClick()}>Submit</button>
                        </form>
                        
                    } */}

				{/* ************************ extra code section ****************************** */}

				<NavBarChild
					isLoggedIn={this.state.isLoggedIn}
					handleClick={this.handleButtonClick}
				/>
			</div>
		);
	}
}

export default NavBarForm;
