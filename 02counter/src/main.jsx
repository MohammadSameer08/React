import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UseRef from "./useRef.jsx";
import CallBack from "./callBack.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <UseRef />
    <CallBack />
  </StrictMode>,
);
