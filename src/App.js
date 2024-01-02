import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import PrivateRoute from "./utils/PrivateRoute.jsx";
import ConfirmEmail from "./components/ConfirmEmail.jsx";
import SimpleLayout from "./layout/SimpleLayout.js";
import Dashboard from "./components/Dashboard.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
     <Route path="/confirm-email/:token" element={<ConfirmEmail />} />
    <Route path="/auth" element={<Authentication/>}/>
    <Route path="" element={<PrivateRoute />}>
    <Route path="/" element={<SimpleLayout />} >
    <Route exact path="/" element={<Home />} />
    <Route exact path="/dashboard" element={<Dashboard/>}/>
    </Route>
    </Route>
    </Route>,
  ),
);
const App = () => {

  return (
    <RouterProvider router={router} />
  );
};

export default App;
