import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Pages/HomePage/Homepage.jsx';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Homepage />,
//     errorElement: <NotFoundPage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>,
)
