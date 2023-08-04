import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserProvider from './context/userContext';
import CartProvider from './context/cartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="333455483546-th3a57g0225dll5rmadtsoaqctamb1u5.apps.googleusercontent.com">
   <UserProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </UserProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);


