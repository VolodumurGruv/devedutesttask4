import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/nav";

import Users from "./components/users/users";
import Articles from "./components/articles/articles";
import Photos from "./components/photos/photos";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Nav />}>
					<Route index element={<Articles />} />

					<Route path="/users" element={<Users />} />
					<Route path="/photos" element={<Photos />} />
					<Route path="*" element={<Articles />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
