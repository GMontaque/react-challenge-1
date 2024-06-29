import React from "react";
import Book from "./Book";

function RenderingLists() {
	const bookList = ["test 1", "test 2", "test 3"];

	const books = [
		{
			title: "title 1",
			author: "author 1",
			pages: 281,
		},
		{
			title: "title 2",
			author: "author 2",
			pages: 282,
		},
		{
			title: "title 3",
			author: "author 3",
			pages: 283,
		},
	];
	return (
		<div>
			<h1>mapping</h1>
			{bookList.map((name) => {
				return <h2 key={name}>{name}</h2>;
			})}
			<hr />
			<hr />
			<hr />
			{/* {books.map((book) => {
        return (
          <div key={book.title}>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>{book.pages}</p>
          </div>
        );
      })} */}

			{books.map((book) => {
				return <Book key={book.title} props={book} />;
			})}
		</div>
	);
}

export default RenderingLists;
