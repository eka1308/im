import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import { CurrentProduct} from './components/currentproduct';
import { Main } from './pages/main';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Userme } from './pages/Userme';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: "products",
        element: <Main />,
      },
      {
        path: "products/:idOfProducts",
        element: <CurrentProduct />,
      },
      {
        path: "userme",
        element: <Userme />,
      },
    ]
  },
  // {
  //   path: "/",
  //   element: <Home /> ,
  // }, 
  // {
  //   path: "/products/:idOfProducts",
  //   element: <CurrentProduct />,
  // }, 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

