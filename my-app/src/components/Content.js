import React, { Component } from "react";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
	// emplty constructor
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			posts: [],
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
		this.displayData();
		this.setState({
			posts: savedPosts,
		});
	}

	handleChange = (e) => {
		let name = e.target.value.toLowerCase();
		const filteredPosts = savedPosts.filter((post) => {
			return post.name.toLowerCase().includes(name);
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
					<PostItem entry={this.state.posts} />
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
					{/* {!this.state.isLoaded ? (
            <Loader />
          ) : (
            savedPosts.map((post) => {
              return <PostItem key={post.title} entry={post} />;
            })
          )} */}

					{!this.state.isLoaded ? (
						<Loader />
					) : (
						this.state.posts.map((post) => {
							return <PostItem key={post.title} entry={post} />;
						})
					)}
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
