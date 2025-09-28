import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",        // Página inicial
    element: <App />,
  },
  {
    path: "/login",   // Página de login separada
    element: <SignIn />,
  },
  {
    path: "/cadastro", // Página de cadastro separada
    element: <SignUp />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
