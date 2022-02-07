import React, { Children } from "react";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Auth0ProviderWithHistory from "../auth/auth0-provider-with-history";
import ProtectedRoute from "../auth/protected-route";
// Add components below
import Landing from "../components/Landing/Landing";
import HomePage from "../components/Homepage/HomePage";
import SideBarWithHeader from "../components/Logged/SimpleSideBar"
import SendMoney from "../components/Logged/routesLogged/SendMoney"
import Cards from "../components/Logged/routesLogged/Home"
import Convert from "../components/Logged/routesLogged/Convert"
import Settings from "../components/Logged/routesLogged/Settings"

const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Routes>
         
           {/* <Route path="/logged" element={<SendMoney/>}/> */}
         <Route path="/logged/home" element={<SideBarWithHeader children={<Cards/>}/>}/>
         <Route path="/logged/sendMoney" element={<SideBarWithHeader children={<SendMoney/>}/>}/> 
         <Route path="/logged/convert" element={<SideBarWithHeader children={<Convert/>}/>}/>
         <Route path="/logged/Transactions" element={<SideBarWithHeader/>}/>
         <Route path="/logged/Favourites" element={<SideBarWithHeader/>}/>
         <Route path="/logged/settings" element={<SideBarWithHeader children={<Settings/>}/>}/>
          
          <Route path="/" element={<Landing />} />
          <Route path="/homepage" element={<ProtectedRoute component={HomePage}/>} /> {/* esta ruta esta protegida a modo de ejemplo */}
        </Routes>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
};

export default RoutesApp;
