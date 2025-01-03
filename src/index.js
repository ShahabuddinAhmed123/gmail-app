import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { InboxProvider } from "./context/InboxContent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <InboxProvider>
    <App />
  </InboxProvider>,
);
