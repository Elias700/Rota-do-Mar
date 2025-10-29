// main.tsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import BeachesDetail from './pages/BeachesDetail/BeachesDetail';
import { AuthProvider } from './contexts/AuthContext';
import Favorites from './pages/Favorites/Favorites';
import { FavoritesProvider } from './contexts/FavoritesContext';

import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter([
   {
     path: "/",          
     element: <App />,
   },
   {
     path: "/login",    
     element: <SignIn />,
   },
   {
     path: "/cadastro", 
     element: <SignUp />,
   },
   {
     path: "/beaches/:id", 
     element: <BeachesDetail />,
   },
   {
     path: "/favoritos",
     element: <Favorites />,
   },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </AuthProvider>
  </StrictMode>
);