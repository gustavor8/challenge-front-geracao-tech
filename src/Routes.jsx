import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Home from "./pages/homePage/HomePage";
import Categorias from "./components/category/categoria";
import MeusPedidos from "./components/meusPedidos/meusPedidos";

const LazyProductDetails = lazy(() =>
  import("./components/productDetails/productDetails")
);

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/produtos" element={<Produtos />} /> */}
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/meuspedidos" element={<MeusPedidos />} />
      <Route
        path="/productDetails/:productId"
        element={
          <Suspense fallback={<h5>Carregando...</h5>}>
            <LazyProductDetails />
          </Suspense>
        }
      ></Route>
    </Routes>
  );
}
