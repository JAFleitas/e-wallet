import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* El BrowserRouter tiene que envolver al provider de auth0 */}
      <Auth0ProviderWithHistory> {/* Provider de auth0, debe envolver a App */}
        <App />
      </Auth0ProviderWithHistory>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);
