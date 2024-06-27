import React from "react";

class EventBinding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello!",
      buttonText: "Exit",
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      introduction: "Goodbye!",
    });
    console.log(this);
  }

  //   handleClick = () => {
  //     this.setState({
  //       introduction: "Goodbye!",
  //     });
  //     console.log(this);
  //   };

  render() {
    return (
      <div>
        <h1>
          {this.state.introduction} {this.props.greeting}
        </h1>
        {/* <button onClick={() => this.handleClick()}> */}
        {/* <button onClick={this.handleClick.bind(this)}> */}
        <button onClick={this.handleClick}>
          {this.state.buttonText} - event
        </button>
      </div>
    );
  }
}

export default EventBinding;



// P1. Use an arrow function in the render method
// handleClick() {
//     this.setState({
//       introduction: "Goodbye!",
//     });
//     console.log(this);
//   }

//   render() {
//     return (
//       <div>
//         <h1>
//           {this.state.introduction} {this.props.greeting}
//         </h1>
//         <button onClick={() => this.handleClick()}>
//           {this.state.buttonText} - event
//         </button>
//       </div>
//     );
//   }


// P2. Call bind on the handler with ‘this’
// handleClick() {
//     this.setState({
//       introduction: "Goodbye!",
//     });
//     console.log(this);
//   }

//   render() {
//     return (
//       <div>
//         <h1>
//           {this.state.introduction} {this.props.greeting}
//         </h1>
//         <button onClick={this.handleClick.bind(this)}>
//           {this.state.buttonText} - event
//         </button>
//       </div>
//     );
//   }


// P3. Bind the event handler in the constructor
// constructor(props) {
//     super(props);
//     this.state = {
//       introduction: "Hello!",
//       buttonText: "Exit",
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

// handleClick() {
//     this.setState({
//       introduction: "Goodbye!",
//     });
//     console.log(this);
//   }

//   render() {
//     return (
//       <div>
//         <h1>
//           {this.state.introduction} {this.props.greeting}
//         </h1>
//          <button onClick={this.handleClick}>
//           {this.state.buttonText} - event
//         </button>
//       </div>
//     );
//   }


// P4. Define the handler as an arrow function
// arrow function example ( Define the handler as an arrow function ) - arrow function always links with parent class
// handleClick = () => {
//     this.setState({
//       introduction: "Goodbye!",
//     });
//     console.log(this);
//   };

//   render() {
//     return (
//       <div>
//         <h1>
//           {this.state.introduction} {this.props.greeting}
//         </h1>
//         <button onClick={this.handleClick}>
//           {this.state.buttonText} - event
//         </button>
//       </div>
//     );
//   }