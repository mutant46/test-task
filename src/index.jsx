import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
const Index = () => {
  return (
    <React.StrictMode>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Index />);
