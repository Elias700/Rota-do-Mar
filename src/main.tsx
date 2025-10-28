// main.tsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import BeachesDetail from './pages/BeachesDetail/BeachesDetail';

import './index.css';

// Estas são as importações corretas para o CSS do carrossel:
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
]);

createRoot(document.getElementById('root')!).render(
   <StrictMode>
     <RouterProvider router={router} />
   </StrictMode>
);