import React from "react";
import { Route, Routes } from "react-router-dom";


// Pages
import { HomePage } from "./pages/HomePage";
import { MusicPage } from "./pages/MusicPage";
import { ProjectPage } from "./pages/ProjectPage";
import { AllProjectsPage } from "./pages/AllProjectsPage";
import { AboutMe } from "./pages/AboutMePage";
import { ContactMe } from "./pages/ContactPage";

function App() {

	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/Music" element={<MusicPage />}></Route>
				<Route path="/Projects" element={<AllProjectsPage />}></Route>
				<Route path="/AboutMe" element={<AboutMe />}></Route>
				<Route path="/Contact" element={<ContactMe />}></Route>
				<Route path="/Projects/:projectTitle" element={<ProjectPage />}></Route>
			</Routes>

		</div>
	);
}

export default App;
