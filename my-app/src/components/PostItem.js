import React from "react";
import css from "./css/Content.module.css";

// destructoring result
function PostItem(props) {
	const { title, name, image, description } = props.entry;
	return (
		<div className={css.SeachItem}>
			<p>Title: {title}</p>
			<p>Artist: {name}</p>
			<img src={image} alt="alt-img" />
			<p>Description: {description}</p>
		</div>
	);
}

// function PostItem(props) {
// 	const posts = props.entry;
// 	return (
// 			<div className={css.SeachItem}>
// 				<p>Title: {posts.title}</p>
// 				<p>Artist: {posts.name}</p>
// 				<img src={posts.image} alt="alt-img" />
// 				<p>Description: {posts.description}</p>
// 			</div>
// 	);
// }

export default PostItem;

// tutor example
// import React from "react"
// import css from "./css/PostItem.module.css";

// function PostItem(props) {
//     return (
//         props.savedPosts.map(post => {
//             // Extra task destructuring
//             const {title, name, image, description} = post
//             return <div className={css.SearchItem} key={title}>
//                 <p>{title}</p>
//                 <p>{name}</p>
//                 <img src={image} alt="random"/>
//                 <p>{description}</p>
//             </div>
//             }
//         )
//     )
// }

// export default PostItem
