import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./pages/Home/Home";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import NotFound from "./pages/NotFound/NotFound";

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
