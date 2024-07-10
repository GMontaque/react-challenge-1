import React from "react";
import css from "./css/Content.module.css";

// destructoring result
function PostItem(props) {
	const { type, user, webformatURL, tags } = props.entry;
	return (
		<div className={css.SeachItem}>
			<h1>ryun</h1>
			<p>Title: {type}</p>
			<p>Artist: {user}</p>
			<img src={webformatURL} alt="alt-img" />
			<p>Description: {tags}</p>
		</div>
	);
}

export default PostItem;
