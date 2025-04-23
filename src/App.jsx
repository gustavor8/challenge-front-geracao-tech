import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Routes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <AppRoutes />
        </main>
      </BrowserRouter>
    </>
  );
}
