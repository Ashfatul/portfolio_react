import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {  RouterProvider} from "react-router-dom";
import router from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/style.scss"



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)