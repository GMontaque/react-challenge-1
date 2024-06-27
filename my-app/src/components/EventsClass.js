import React, { Component } from "react";

export class EventsClass extends Component {
	clickHandlers() {
		console.log("Clicked the class button");
	}

	render() {
		return (
			<div>
				<button onClick={this.clickHandlers}>
					click - functional component
				</button>
			</div>
		);
	}
}

export default EventsClass;
