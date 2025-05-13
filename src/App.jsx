import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
