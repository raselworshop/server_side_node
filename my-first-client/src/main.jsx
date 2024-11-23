import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main.jsx';
import Phones from './component/Phones.jsx';
import Phone from './component/Phone.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/phones",
        element: <Phones />,
        loader: ()=> fetch('http://localhost:5000/phone')
      },
      {
        path: '/phones/:id',
        element: <Phone></Phone>,
        loader: ({params}) => fetch(`http://localhost:5000/phone/${params.id}`)
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
