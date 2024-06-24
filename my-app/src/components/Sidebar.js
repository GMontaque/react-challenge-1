import React from "react";
import css from "./css/Sidebar.module.css";

// function Sidebar(props) {
// 	return <h1>It works!</h1>;
// }

// const Sidebar = () => <h1>It works too!</h1>;

// statless function
const Sidebar = () => {
	return (
		<div className={css.sidebar}>
			<a href="/">My Photos</a>
			<a href="/">My Illustrations</a>
			<a href="/">My Paintings</a>
		</div>
	);
};

// function Sidebar() {
// 	return (
// 		<div>
// 			<a href="#." target="_blank">
// 				My Photos
// 			</a>
// 			<a href="#." target="_blank">
// 				My Illustrations
// 			</a>
// 			<a href="#." target="_blank">
// 				My Paintings
// 			</a>
// 		</div>
// 	);
// }

export default Sidebar;
