import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import Profile from "./App.js";

const domNode = document.getElementById("root");

const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <div className="center">
      <Profile />
    </div>
  </React.StrictMode>
);
