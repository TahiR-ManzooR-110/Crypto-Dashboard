import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";


import Cryptocurrency from "./pages/cryptocurrency/Cryptocurrency";
import { Navbar } from "./components/navbar/Navbar";
function App() {
  return (


    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/get/:bitcoin?" replace />} />

          <Route path="/get/:bitcoin?" element={<Cryptocurrency />} />

          <Route path="*" element={<div>Not found 404</div>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
