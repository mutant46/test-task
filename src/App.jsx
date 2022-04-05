import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

const App = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/edit" element={<Edit />} />
      </Routes>
    </main>
  );
};

export default App;
