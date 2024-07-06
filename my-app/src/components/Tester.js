// import React, { useState } from "react";

// const MyComponent = () => {
// 	// Initialize state with an empty array or some default value
// 	const [nums, setNums] = useState([]);

// 	// Function to update nums state
// 	const updateNums = () => {
// 		setNums([...nums, 1]);
// 	};

// 	return (
// 		<div>
// 			<button onClick={updateNums}>Update Numbers</button>
// 			<ul>
// 				{nums.map((num, index) => (
// 					<li key={index}>{num}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };

// export default MyComponent;

// import React, { useState, useEffect } from "react";

// const TimerComponent = () => {
// 	const [time, setTime] = useState(0);

// 	useEffect(() => {
// 		console.log("Creating timer");
// 		const interval = setInterval(() => {
// 			console.log("Interval executed");
// 			setTime((time) => time + 1);
// 		}, 1000);

// 		return () => {
// 			console.log("Cleaning up!");
// 			clearInterval(interval);
// 		};
// 	}, []);

// 	return (
// 		<div>
// 			<p>Time: {time} seconds</p>
// 		</div>
// 	);
// };

// export default TimerComponent;

// import React, { useState, useEffect } from "react";

// function Timer() {
// 	const [count, setCount] = useState(0);

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			setCount((prevCount) => prevCount + 1);
// 		}, 1000);

// 		return () => clearInterval(interval);
// 	}, []);

// 	return <div>Timer: {count}</div>;
// }

// export default Timer;

import React, { useState, useEffect, useRef } from "react";

function Timer() {
	const [count, setCount] = useState(0);
	const intervalRef = useRef(null);

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
		}, 1000);

		return () => clearInterval(intervalRef.current);
	}, []);

	const handleStopTimer = () => {
		clearInterval(intervalRef.current);
		console.log("Timer stopped manually!");
	};

	return (
		<div>
			<p>Timer: {count} seconds</p>
			<button onClick={handleStopTimer}>Stop Timer</button>
		</div>
	);
}

export default Timer;
