import React, { Component } from "react";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";

export class Content extends Component {
	// emplty constructor
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={css.Content}>
				<div>
					<h1 className={css.TitleBar}>My Photos</h1>
				</div>
				<div className={css.SearchResults}>
					{/* {savedPosts.map((post) => {
						return (
							<div className={css.SearchItem} key={post.title}>
								<p>{post.title}</p>
								<p>{post.name}</p>
								<img src={post.image} alt="random" />
								<p>{post.description}</p>
							</div>
						);
					})} */}
					{savedPosts.map((post) => {
						return <PostItem key={post.title} entry={post} />;
					})}
				</div>
			</div>
		);
	}
}

export default Content;

// tutor example
// import React, { Component } from "react";
// import css from "./css/Content.module.css";
// import {savedPosts} from "../posts.json";
// import PostItem from "./PostItem";

// export class Content extends Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div className={css.Content}>

//                 <div className={css.TitleBar}>
//                     <h1>My Photos</h1>
//                 </div>

//                 <div className={css.SearchResults}>

//                     {/* Part 1: Creating the map function */}

//                         {/* {
//                     savedPosts.map((post)=>{
//                             return <div className={css.SearchItem} key={post.title}>
//                                 <p>{post.title}</p>
//                                 <p>{post.name}</p>
//                                 <img src={post.image} alt="random"/>
//                                 <p>{post.description}</p>
//                                 </div>
//                         })
//                     } */}

//                     {/* Part 2: Creating a child component */}

//                     <PostItem savedPosts={savedPosts} />
//                 </div>
//             </div>
//         )
//     }
// }

// export default Content
