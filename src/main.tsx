import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import './index.css';
import BeachesDetail from './pages/BeachesDetail/BeachesDetail';

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
