import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import router from './routers/router';
import React from 'react';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
