import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css";

class navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			greeting: "Hello, guest!",
			buttonText: "log in",
		};
	}

	handleClick() {
		this.setState(
			{
				greeting:
					this.state.greeting === "Hello, guest!"
						? "Welcome back, user!"
						: "Hello, guest!",
				buttonText: this.state.buttonText === "log in" ? "log out" : "log in",
			},
			() => {
				console.log(this.state.greeting, this.state.buttonText);
			}
		);

		// basic layout
		// this.setState(
		// 	{
		// 		greeting: "Welcome back, user!",
		// 		buttonText: "log out",
		// 	},
		// 	() => {
		// 		console.log(this.state.greeting, this.state.buttonText);
		// 	}
		// );
	}

	render() {
		return (
			<div className={css.NavBar}>
				<h1>My Gallery</h1>
				<div>
					<span>{this.state.greeting}</span>
					<button type="button" onClick={() => this.handleClick()}>
						{this.state.buttonText}
					</button>
				</div>
			</div>
		);
	}
}

export default navbar;
