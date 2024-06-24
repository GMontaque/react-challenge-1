import React, { Component } from "react";

// stateful class
class StatefulGreeting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			introduction: "Hello!",
			buttonText: "Exit",
			count: 0,
		};
	}

	handleClick() {
		this.setState({
			introduction:
				this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
			buttonText: this.state.buttonText === "Exit!" ? "Enter!" : "Exit!",
		});
		console.log(this.state.introduction, this.state.buttonText);
	}

	increment() {
		this.setState(
			(prevState, prevProps) => {
				console.log("prestate:", prevState);
				console.log("preprops:", prevProps);

				return { count: prevState.count + 1 };
			},
			() => {
				console.log("new count:", this.state.count);
			}
		);
		// this.setState(
		// 	{
		// 		count: this.state.count + 1,
		// 	},
		// 	() => {
		// 		console.log(this.state.count);
		// 	}
		// );
	}

	// toggle updates handleClick
	// handleClick() {
	//     if (this.state.buttonText === "Enter") {
	//         this.setState({
	//             introduction: "Hello!",
	//             buttonText: "Exit",
	//         });
	//     } else {
	//         this.setState({
	//             introduction: "Goodbye!",
	//             buttonText: "Enter",
	//         });
	//     }

	//     console.log(this.state.introduction, this.state.buttonText);
	// }

	render() {
		return (
			<div>
				<h1>
					{this.state.introduction} {this.props.greeting}
				</h1>
				<button onClick={() => this.handleClick()}>
					{this.state.buttonText}
				</button>
				<button onClick={() => this.increment()}>counter</button>
			</div>
		);
	}
}

// stateful class - increments counter by plus 1 each time
// class StatefulGreeting extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			introduction: "Hello!",
// 			buttonText: "Exit",
// 			counter: 0,
// 		};
// 	}

// 	handleClick() {
// 		let newCount = this.state.counter;
// 		this.setState({
// 			counter: newCount + 1,
// 		});
// 		console.log(this.state.counter);
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>
// 					{this.state.introduction} {this.props.greeting}
// 				</h1>
// 				<button onClick={() => this.handleClick()}>
// 					{this.state.buttonText}
// 				</button>
// 			</div>
// 		);
// 	}
// }

// statless class
// class StatefulGreeting extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello {this.props.greeting} </h1>
// 				<h2>My Name is {this.props.name} </h2>
// 			</div>
// 		);
// 	}
// }

export default StatefulGreeting;
