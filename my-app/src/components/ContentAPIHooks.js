import React, { useEffect, useState } from "react";
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";
import axios from "axios";
import API_KEY from "../secrets";

function ContentAPIHooks() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [posts, setPosts] = useState([]);
	const [savedPosts, setSavedPosts] = useState([]);

	useEffect(() => {
		fetchImages();
	}, []);

	const fetchImages = async () => {
		const response = await axios.get(
			`https://pixabay.com/api/?key=${API_KEY}&per_page=100`
		);
		const fetchedPosts = response.data.hits;
		setIsLoaded(true);
		setPosts(fetchedPosts);
		setSavedPosts(fetchedPosts);
	};

	const handleChange = (e) => {
		let name = e.target.value.toLowerCase();
		const filteredPosts = savedPosts.filter((post) => {
			return post.user.toLowerCase().includes(name);
		});
		console.log(name);
		console.log(filteredPosts);
		setPosts(filteredPosts);
	};

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
						onChange={(e) => handleChange(e)}
					/>
					<h4> posts found: {posts.length} </h4>
				</form>
			</div>
			<div className={css.SearchResults}>
				{/* <PostItemAPI entry={posts} /> */}
				{!isLoaded ? (
					<Loader />
				) : (
					posts.map((post) => {
						return <PostItemAPI key={post.id} entry={post} />;
					})
				)}
			</div>
		</div>
	);
}

export default ContentAPIHooks;
