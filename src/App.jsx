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
          <div>
            <div className="flex justify-center gap-6">
              <ProductCard badge={true} />
              <ProductCard badge={true} />
              <ProductCard badge={false} />
              <ProductCard badge={false} />
            </div>
            <div className="flex justify-center gap-6">
              <ProductCard badge={false} />
              <ProductCard badge={false} />
              <ProductCard badge={false} />
              <ProductCard badge={false} />
            </div>
          </div>
          <AppRoutes />
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}
