import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingTest from "./components/LandingTest";
import HomePageTest from "./components/HomePageTest";
import ProtectedRoute from "./auth/protected-route";

const App = () => {
  return (
      <div>
          <Routes>
            <Route path="/" element={<LandingTest />} />
            <Route path="/homepage" element={<ProtectedRoute component={HomePageTest}/>} /> {/* esta ruta esta protegida a modo de ejemplo */}
          </Routes>
      </div>
  );
};

export default App;
