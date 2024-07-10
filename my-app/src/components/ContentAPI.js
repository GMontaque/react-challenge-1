import React, { Component } from "react";
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";
import axios from "axios";
import API_KEY from "../secrets"

export class Content extends Component {
	// emplty constructor
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			posts: [],
			savedPosts: []
		};
	}
	displayData() {
		console.log("displayData() called");
		setTimeout(() => {
			console.log("Data fetched!");
			this.setState({
				isLoaded: true,
			});
		}, 2000);
	}
	
	

	componentDidMount() {
		console.log("Component mounted");
		this.fetchImages();

	}

	async fetchImages(){
		const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`)
		const fetchedPosts = response.data.hits;
		this.setState({
			isLoaded: true,
			posts: fetchedPosts,
			savedPosts: fetchedPosts,
		});
	}

	handleChange = (e) => {
		let name = e.target.value.toLowerCase();
		const filteredPosts = this.state.savedPosts.filter((post) => {
			return post.user.toLowerCase().includes(name);
		});
		console.log(name);
		console.log(filteredPosts);
		this.setState({ posts: filteredPosts });
	};

	render() {
		console.log(this.state.posts);

		return (
			<div className={css.Content}>
				<div className={css.TitleBar}>
					<h1>My Photos</h1>
					<form>
						<label htmlFor="searchInput" className="form-label">
							Search
						</label>
						<input
							type="search"
							name="searchInput"
							id="searchBar"
							placeholder="By Author"
							onChange={(e) => this.handleChange(e)}
						/>
						<h4> posts found: {this.state.posts.length} </h4>
					</form>
				</div>
				<div className={css.SearchResults}>
					<PostItemAPI entry={this.state.posts} />
					{!this.state.isLoaded ? (
						<Loader />
					) : (
						this.state.posts.map((post) => {
							return <PostItemAPI key={post.id} entry={post} />;
						})
					)}
				</div>
			</div>
		);
	}
}

export default Content;

