import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import Login from "./pages/login/Login";
// import Cadastro from "./pages/cadastro/Cadastro";
import GlobalStyles from "./globalStyles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    {/* <App /> */}
    {/* <Cadastro /> */}
    <Login />
  </StrictMode>,
);
