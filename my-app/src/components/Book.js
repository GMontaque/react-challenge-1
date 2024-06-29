import React from "react";

function Book(props) {
	// course solution
	const book = props.props;

	return (
		<div>
			<h5>{book.title}</h5>
			<p>{book.author}</p>
			<p>{book.pages}</p>
		</div>
	);

	// code works
	// return (
	//   <div>
	//     <h5>{props.props.title}</h5>
	//     <p>{props.props.author}</p>
	//     <p>{props.props.pages}</p>
	//   </div>
	// );

	//code does not work
	// return (
	//   <div>
	//     <h5>{props.title}</h5>
	//     <p>{props.author}</p>
	//     <p>{props.pages}</p>
	//   </div>
	// );
}

export default Book;
