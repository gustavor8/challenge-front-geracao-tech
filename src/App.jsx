import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import Header from "./components/header/Header";
import ProductCard from "./components/productCard/productCard";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <ProductCard badge={true} />
          <ProductCard badge={false} />
          <AppRoutes />
        </main>
      </BrowserRouter>
    </>
  );
}
