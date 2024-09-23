import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { HomeRoutes } from "./Home_Module/routes/HomeRoutes";
import { ContactRoutes } from "./Contact_Module/routes/ContactRoutes";
import { AboutRoutes } from "./About_Module/routes/AboutRoutes";
import { ProjectRoutes } from "./Project_Module/routes/ProjectRoutes";
import NoPage from "./pages/NoPage";
import AllProjectsPage from "./Project_Module/AllProjectsPage";
import Header from "./Components/Nav";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<HomeRoutes />} />
          <Route path="/contact" element={<ContactRoutes />} />
          <Route path="/about" element={<AboutRoutes />} />

          {/* Dynamic project route */}
          <Route path="/projects/" element={<AllProjectsPage />} />
          <Route path="/projects/:title" element={<ProjectRoutes />} />

          {/* For undefined URLS, we can put this to make a 404 page */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </HelmetProvider>
    </>
  );
}

export default App;
