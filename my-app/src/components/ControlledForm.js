import React, { Component } from "react";

export class ControlledForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      option: "general",
      textarea: "",
    };
  }

  updateInput = (e) => {
    this.setState({
      name: e.target.value,
    });
    console.log(this.state.name);
  };

  textareaInput = (e) => {
    this.setState({
      textarea: e.target.value,
    });
    console.log(this.state.textarea);
  };

  optionInput = (e) => {
    this.setState(
      {
        option: e.target.value,
      },
      () => console.log(this.state.option)
    );
  };

  //   combination of all 3 functions above as one
  //   updateInput = (e) => {
  //     const { name, value } = e.target;
  //     this.setState(
  //       {
  //         [name]: value,
  //       },
  //       () => console.log(this.state[name])
  //     );
  //   };

  formSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h2>Please fill out the form below:</h2>
        <form onSubmit={this.formSubmit}>
          <div>
            <label htmlFor="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              name="name"
              id="validationCustom01"
              value={this.state.name}
              onChange={this.updateInput}
            />
          </div>
          <div>
            <label htmlFor="id-category" className="form-label">
              Category
            </label>
            <select
              id="id-category"
              name="category"
              value={this.state.option}
              onChange={this.optionInput}
            >
              <option value="website">Website issue</option>
              <option value="order">Order issue</option>
              <option value="general">General issue</option>
            </select>
          </div>
          <div>
            <label htmlFor="id-comments" className="form-label">
              Comments:
            </label>
            <textarea
              cols="30"
              value={this.state.textarea}
              rows="10"
              onChange={this.textareaInput}
            />
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
