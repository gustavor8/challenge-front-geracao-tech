import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import Header from "./components/header/Header";
import ProductCard from "./components/productCard/productCard";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <div className="flex flex-wrap justify-center gap-10">
            <ProductCard badge={true} />
            <ProductCard badge={true} />
            <ProductCard badge={false} />
            <ProductCard badge={false} />
            <ProductCard badge={false} />
            <ProductCard badge={false} />
            <ProductCard badge={false} />
            <ProductCard badge={false} />
          </div>
          <AppRoutes />
          <Footer/>
        </main>
      </BrowserRouter>
    </>
  );
}
