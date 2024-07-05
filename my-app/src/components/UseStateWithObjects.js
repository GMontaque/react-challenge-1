import React, { useState } from "react";

function UseStateWithObjects() {
	const [name, setName] = useState({ firstName: "", lastName: "" });
	const [num, setNum] = useState(0);
	let increment = () => {
		setNum((prevNum) => {
			console.log("Previous State:", prevNum);
			return prevNum + 1; // Return the incremented number directly
		});
	};
	return (
		<div>
			<form>
				<input
					type="text"
					value={name.firstName}
					onChange={(e) =>
						setName({
							...name,
							firstName: e.target.value,
						})
					}
				/>
				<input
					type="text"
					value={name.lastName}
					onChange={(e) =>
						setName({
							...name,
							lastName: e.target.value,
						})
					}
				/>
				<h2>{JSON.stringify(name)}</h2>
				<button
					type="button"
					class="btn btn-primary"
					onClick={increment}

					// onClick={() => {
					// 	setNum(num + 1);
					// }}
				>
					Button
				</button>

				<p>{num}</p>
			</form>
		</div>
	);
}

export default UseStateWithObjects;
