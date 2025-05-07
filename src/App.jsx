import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import Header from "./components/header/Header";
import ProductDetails from "./components/productDetails/produtcDetails";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <AppRoutes />
          <ProductDetails id={2} />
        </main>
      </BrowserRouter>
    </>
  );
}
