import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
// import FinalChemists from "./ChemistSearch";
import Poem from "./Haiku";
// import RecipeList from "./ExtractChallenge";
// import ArrayPractice from "./ArrayPractice";
// import Profile from "./Card.js";

const domNode = document.getElementById("root");

const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <div className="center">
      <Poem />
    </div>
  </React.StrictMode>
);
