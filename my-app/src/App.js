import css from "./App.module.css";
import NavBarForm from "./components/NavBarForm";
import Sidebar from "./components/Sidebar";
import StatefulGreeting from "./components/StatefulGreeting";
import NavBarSimple from "./components/NavBarSimple";
import EventsFunctional from "./components/EventsFunctional";
import EventsClass from "./components/EventsClass";
import EventBinding from "./components/EventBinding";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import NestingComponents from "./components/NestingComponents";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import RenderingLists from "./components/RenderingLists";
import Content from "./components/Content";
import Clock from "./components/Clock";
import LifeCyclesCDM from "./components/LifeCyclesCDM";
import { LifeCyclesCDU } from "./components/LifeCyclesCDU";

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
			<EventsFunctional />
			<EventsClass />
			<EventBinding />
			<ConditionalRenderingFunctional connected={false} />
			<ConditionalRenderingClass />
			<NestingComponents />
			<MethodsAsPropsParent />
			<br></br>
			<br></br>
			<NavBarForm />
			<br></br>
			<br></br>
			<RenderingLists />
			<Content />
			<Clock />
			<LifeCyclesCDM />
			<LifeCyclesCDU />
		</div>
	);
}

export default App;
