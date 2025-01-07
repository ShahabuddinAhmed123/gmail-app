import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SentProvider } from "./context/note/SentContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <SentProvider>
    <App />
    </SentProvider>
);
