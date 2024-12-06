/** @format */

import { useState } from "react";
import Loading from "./Loading";
import Notes from "./Notes";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* < Loading /> */}
			<Notes />
		</>
	);
}

export default App;
