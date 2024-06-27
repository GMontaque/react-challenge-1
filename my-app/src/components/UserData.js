import React from "react";

function UserData(props) {
	return (
		<div>
			<h1>{props.isLoaded ? "Data loaded! asd" : "Loading ... asd"}</h1>
		</div>
	);
}

export default UserData;
