// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Regeln from "./Pages/Regeln";
import Voten from "./Pages/Voten";

import Layout from "./Layout";
import Error404 from "./Pages/Error404";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/team" element={<Layout><Team /></Layout>} />
          <Route path="/regeln" element={<Layout><Regeln /></Layout>} />
          <Route path="/voten" element={<Layout><Voten /></Layout>} />

          <Route path="*" element={<Error404 />} />

        </Routes>
    </Router>
  );
}

export default App;
