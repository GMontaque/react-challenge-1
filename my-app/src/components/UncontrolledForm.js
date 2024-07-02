import React, { Component } from "react";

export class ControlledForm extends Component {
	constructor(props) {
		super(props);
		this.inputName = React.createRef();
		this.inputSelect = React.createRef();
		this.inputTextarea = React.createRef();
	}

	formSubmit = (e) => {
		e.preventDefault();
		console.log("form submitted", e);
		console.log("create input ref", this.inputName.current.value);
		console.log("create select ref", this.inputSelect.current.value);
		console.log("create textarea ref", this.inputTextarea.current.value);
	};

	render() {
		return (
			<div>
				<h2>Please fill out the form below: - uncontrolled</h2>
				<form onSubmit={this.formSubmit}>
					<div>
						<label htmlFor="validationCustom01" className="form-label">
							First name
						</label>
						<input
							type="text"
							name="name"
							id="validationCustom01"
							ref={this.inputName}
						/>
					</div>
					<div>
						<label htmlFor="id-category" className="form-label">
							Category
						</label>
						<select id="id-category" name="category" ref={this.inputSelect}>
							<option value="website">Website issue</option>
							<option value="order">Order issue</option>
							<option value="general">General issue</option>
						</select>
					</div>
					<div>
						<label htmlFor="id-comments" className="form-label">
							Comments:
						</label>
						<textarea cols="30" rows="10" ref={this.inputTextarea} />
					</div>
					<button className="btn btn-primary" type="submit">
						Submit form
					</button>
				</form>
			</div>
		);
	}
}

export default ControlledForm;
