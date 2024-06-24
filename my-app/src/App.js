import css from "./App.module.css";
import Sidebar from "./components/Sidebar";
import StatefulGreeting from "./components/StatefulGreeting";
import NavBarSimple from "./components/NavBarSimple";

function App() {
	return (
		// <div className={css.App}>
		<div className={css.App}>
			{/* Add your components here */}
			<StatefulGreeting
				greeting="I'm a stateful class component!"
				name="Mike"
			/>
			<Sidebar />
			<NavBarSimple />
		</div>
	);
}

export default App;
