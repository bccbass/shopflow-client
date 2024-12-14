/** @format */

import { useState } from "react";
import { Routes, Route } from "react-router";
import SideNav from "./SideNav";
import AppBar from "./AppBar";
import Home from "./Home";
import Notes from "./Notes/Notes";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<AppBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/notes" element={<Notes />} />
			</Routes>
		</>
	);
}

export default App;
