import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Auth0Provider } from '@auth0/auth0-react';

const queryClient = new QueryClient();


const {VITE_CLIENT_ID , VITE_DOMAIN} = import.meta.env;

 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
    domain={VITE_DOMAIN}
    clientId={VITE_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
      <QueryClientProvider client={queryClient}>
      <App /> 
    </QueryClientProvider>
  </Auth0Provider>
  </StrictMode>,
)
