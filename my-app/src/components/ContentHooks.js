import React, { useEffect, useState } from "react";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

function ContentHooks() {
	const [isLoaded, setIsLoaded] = useState(true);
	const [fetchedPosts, setfetchedPosts] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			setfetchedPosts(savedPosts);
			setIsLoaded(false);
		}, 2000);
	}, []);

	const handleChange = (e) => {
		let name = e.target.value.toLowerCase();
		const filteredPosts = savedPosts.filter((post) => {
			return post.name.toLowerCase().includes(name);
		});

		setfetchedPosts(filteredPosts);
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
					<h4> posts found: {fetchedPosts.length} </h4>
				</form>
			</div>
			<div className={css.SearchResults}>
				<PostItem entry={fetchedPosts} />

				{isLoaded ? (
					<Loader />
				) : (
					fetchedPosts.map((post) => {
						return <PostItem key={post.title} entry={post} />;
					})
				)}
			</div>
		</div>
	);
}

export default ContentHooks;
