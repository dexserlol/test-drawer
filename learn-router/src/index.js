import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './Error';
import Contacts, {
  loader as contactLoader,action as contactAction,
 } from './Contacts';
import './index.css';
import App , { loader as rootLoader, action as rootAction } from './App';
import EditContact, {
  action as editAction,
} from "./edit";
import { action as destroyAction } from "./destroy.js";
import Layer from './first-layer'
const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <Error />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {index:true, element: <Layer />},
      {
        path: "contacts/:contactId",
        element: <Contacts />,
        loader: contactLoader,
        action: contactAction
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action:editAction
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
      }
    ],
  }, 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
