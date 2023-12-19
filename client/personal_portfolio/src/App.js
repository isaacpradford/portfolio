import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";
import { AllProjectsPage } from "./pages/AllProjectsPage";

function App() {

	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/Projects" element={<AllProjectsPage />}></Route>
				<Route path="/Projects/:projectTitle" element={<ProjectPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
