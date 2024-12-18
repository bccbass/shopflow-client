/** @format */

import { useState } from "react";
import { Routes, Route } from "react-router";
import SideNav from "./SideNav";
import AppBar from "./AppBar";
import HeaderDrawer from './HeaderDrawer'
import Home from "./Home";
import Notes from "./Notes/Notes";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			< HeaderDrawer >
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/notes" element={<Notes />} />
			</Routes>
			</ HeaderDrawer >

		</>
	);
}

export default App;
