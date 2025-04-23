import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Produtos from "./components/produtos/produtos";
import Categorias from "./components/categoria/categoria";
import MeusPedidos from "./components/meusPedidos/meusPedidos";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/meuspedidos" element={<MeusPedidos />} />
    </Routes>
  );
}
