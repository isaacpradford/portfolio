import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";

function App() {

	function load() {
		setTimeout(() => {
		  }, 20050);
	}
	return (
		<div onLoad={load()}>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/:projectTitle" element={<ProjectPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
