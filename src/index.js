import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import App from './App';
import { CurrentProduct} from './components/CurrentProduct';
import { Main } from './pages/Main';
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

]);

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <QueryClientProvider client={queryClient}>
       <RouterProvider router={router} />
     </QueryClientProvider>
     </Provider>
  </React.StrictMode>
);

