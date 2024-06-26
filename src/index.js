import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
// import Header from "./Header";
import Body from "./Body";
// import Footer from "./Footer";
// import About from "./About";
import Error from "./Error";
// import Contact from "./contact";

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Body/>
        },
        // {
        //   path: "/about",
        //   element: <About/>
        // },
        // {
        //   path: "/contact",
        //   element: <Contact/>
        // },
      ]
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
