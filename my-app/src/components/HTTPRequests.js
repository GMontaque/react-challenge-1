import React, { Component } from "react";
import axios from "axios";

export class HTTPRequests extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
		};
	}

	componentDidMount() {
		axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
			console.log(response);
			this.setState({
				posts: response.data,
			});
		});
	}
	render() {
		const posts = this.state.posts;
		// return (
		// 	<div>
		// 		<h2>Posts</h2>
		// 		{/* turns the response into one string value */}
		// 		{/* <p>{JSON.stringify(this.state.posts)}</p> */}
		// 		{posts.map((book) => {
		// 			return (
		// 				<div key={book.id}>
		// 					<h4>{book.title}</h4>
		// 					<p>userId: {book.userId}</p>
		// 					<p>Id: {book.id}</p>
		// 					<p>{book.body}</p>
		// 				</div>
		// 			);
		// 		})}
		// 	</div>
		// );

		return (
			<div>
				<h2>Posts</h2>
				{/* turns the response into one string value */}
				{/* <p>{JSON.stringify(this.state.posts)}</p> */}
				{posts.length ? (
					posts.map((book) => (
						<div key={book.id}>
							<h4>{book.title}</h4>
							<p>userId: {book.userId}</p>
							<p>Id: {book.id}</p>
							<p>{book.body}</p>
						</div>
					))
				) : (
					<h4>Loading posts....</h4>
				)}
			</div>
		);
	}
}

export default HTTPRequests;

// import React, { Component } from "react";
// import axios from "axios";

// export class HTTPRequests extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			posts: [],
// 			error: null,
// 		};
// 	}

// 	componentDidMount() {
// 		axios
// 			.get("https://jsonplaceholder.typicode.com/posts")
// 			.then((response) => {
// 				console.log(response);
// 				this.setState({
// 					posts: Array.isArray(response.data) ? response.data : [response.data],
// 				});
// 			})
// 			.catch((error) => {
// 				this.setState({
// 					error: error.message,
// 				});
// 			});
// 	}

// 	render() {
// 		const posts = this.state.posts;
// 		return (
// 			<div>
// 				<h2>Posts:</h2>
// 				{posts.length ? (
// 					posts.map((post) => (
// 						<div key={post.id}>
// 							<h2>
// 								{post.id}. {post.title}
// 							</h2>
// 							<h4>By User ID {post.userId}</h4>
// 							<p>{post.body}</p>
// 							<hr />
// 						</div>
// 					))
// 				) : this.state.error ? (
// 					<p>{this.state.error}</p>
// 				) : (
// 					<h4>Loading posts ...</h4>
// 				)}
// 			</div>
// 		);
// 	}
// }

// export default HTTPRequests;
