import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Keep Router here
import App from "./App";
import "./index.css";
import StoreContextProvider from "./context/StoreContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />    
    </StoreContextProvider>
  </BrowserRouter>
);
