import { AppState, Auth0Provider } from '@auth0/auth0-react';
import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

 // esto es el provider de auth0
 const Auth0ProviderWithHistory = ({ children }: PropsWithChildren<any>): JSX.Element | null => {

  const { VITE_APP_AUTH0_DOMAIN, VITE_APP_AUTH0_CLIENT_ID } = import.meta.env;

  const navigate = useNavigate();

  const onRedirectCallback = (appState: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={VITE_APP_AUTH0_DOMAIN}
      clientId={VITE_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;