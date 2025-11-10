import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProjectHub from "../pages/ProjectHub";
import NotFound from "../components/NotFound";
import CadastroInfo from "../pages/CadastroInfo";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-hub" element={<ProjectHub />} />
        <Route path="/cadastro-informacoes" element={<CadastroInfo />} />

        {/* Rota para páginas não encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
