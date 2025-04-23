import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import Header from "./components/header/Header";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <AppRoutes />
        </main>
      </BrowserRouter>
    </>
  );
}
