import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth0ProviderWithHistory from "../auth/auth0-provider-with-history";
import ProtectedRoute from "../auth/protected-route";
// Add components below
import Landing from "../components/Landing/Landing";
import HomePage from "../components/Homepage/HomePage";


const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/homepage" element={<ProtectedRoute component={HomePage}/>} /> {/* esta ruta esta protegida a modo de ejemplo */}
        </Routes>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
};


export default RoutesApp;
