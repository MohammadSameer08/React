import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UseRef from "./useRef.jsx";
import CallBack from "./callBack.jsx";
import UseEffectDemo from "./useEffect.jsx";
import Login from "./Login.jsx";
import BasicContextExample from "./BasicContextExample.jsx";
import BasicContextExampleAPP from "./contextAPI/ContextAPP.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <UseRef />
    <CallBack />
    <UseEffectDemo />
    <Login />
    <BasicContextExample />
    <BasicContextExampleAPP />
  </StrictMode>,
);
