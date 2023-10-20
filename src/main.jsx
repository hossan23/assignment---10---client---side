import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Home from './Home';
import AddProduct from './AddProduct';
import Cart from './Cart';
import Login from './Login';
import AuthProvider from './AuthProvider/AuthProvider';
import Register from './Register';
import BrandPage from './BrandPage';
import PrivateRoutes from './PrivateRoutes';
import DetailsPage from './DetailsPage';
import Update from './Update';
const router = createBrowserRouter([
 {
  path: '/',
  element: <Root></Root>,
  children: [
   {
    path: '/',
    element: <Home></Home>,
    loader: () => fetch('../myData.json'),
   },
   {
    path: '/addProduct',
    element: (
     <PrivateRoutes>
      <AddProduct></AddProduct>
     </PrivateRoutes>
    ),
   },
   {
    path: '/myCart',
    element: (
     <PrivateRoutes>
      <Cart></Cart>,
     </PrivateRoutes>
    ),
    loader: () => fetch('http://localhost:5000/myCart'),
   },
   {
    path: '/login',
    element: <Login></Login>,
   },
   {
    path: '/register',
    element: <Register></Register>,
   },
   {
    path: '/brandPage/:brand_name',
    element: <BrandPage></BrandPage>,
    loader: () => fetch('http://localhost:5000/products'),
   },
   {
    path: '/detailsPage/:_id',
    element: (
     <PrivateRoutes>
      <DetailsPage></DetailsPage>
     </PrivateRoutes>
    ),
    loader: () => fetch('http://localhost:5000/products'),
   },
   {
    path: '/update/:_id',
    element: (
     <PrivateRoutes>
      <Update></Update>,
     </PrivateRoutes>
    ),
    loader: ({ params }) => fetch(`http://localhost:5000/products/${params._id}`),
   },
  ],
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <AuthProvider>
   <RouterProvider router={router} />
  </AuthProvider>
 </React.StrictMode>
);
