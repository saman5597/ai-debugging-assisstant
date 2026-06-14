import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ReportPage from "./pages/ReportPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/home" element={<HomePage />} />

      <Route
        path="/report/:id"
        element={<ReportPage />}
      />
    </Routes>
  );
}

export default App;