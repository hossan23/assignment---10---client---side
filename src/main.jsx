import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Home from './Home';
import AddProduct from './AddProduct';
import Cart from './Cart';
import Login from './Login';
const router = createBrowserRouter([
 {
  path: '/',
  element: <Root></Root>,
  children: [
   {
    path: '/',
    element: <Home></Home>,
   },
   {
    path: '/addProduct',
    element: <AddProduct></AddProduct>,
   },
   {
    path: '/myCart',
    element: <Cart></Cart>,
   },
   {
    path: '/login',
    element: <Login></Login>,
   },
  ],
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <RouterProvider router={router} />
 </React.StrictMode>
);
