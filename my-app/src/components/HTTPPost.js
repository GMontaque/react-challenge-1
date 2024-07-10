import axios from "axios";
import React, { Component } from "react";

export class HTTPPost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			error: "",
		};
	}

	postToApi = () => {
		axios
			.post("https://jsonplaceholder.typicode.com/posts", {
				title: "hello world",
				body: "it works",
				userId: 123,
			})
			.then((response) => {
				console.log(response);
				this.setState({
					posts: Array.isArray(response.data) ? response.data : [response.data],
				});
			})
			.catch((error) => {
				this.setState({
					error: error.message,
				});
			});
	};
	render() {
		const posts = this.state.posts;
		return (
			<div>
				<button onClick={this.postToApi}>create post</button>
				{posts.length ? (
					posts.map((book) => (
						<div key={book.id}>
							<h4>{book.title}</h4>
							<p>userId: {book.userId}</p>
							<p>Id: {book.id}</p>
							<p>{book.body}</p>
						</div>
					))
				) : this.state.error ? (
					<p>{this.state.error}</p>
				) : (
					<h4>Loading posts ...</h4>
				)}
			</div>
		);
	}
}

export default HTTPPost;
