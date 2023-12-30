import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import PrivateRoute from "./utils/PrivateRoute.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/auth" element={<Authentication/>}/>
    <Route path="" element={<PrivateRoute />}>
    <Route exact path="/" element={<Home />} />
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
