import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/projetos/:slug" element={<ProjectDetails />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
