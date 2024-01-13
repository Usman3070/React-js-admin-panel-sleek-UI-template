import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import PrivateRoute from "./utils/PrivateRoute.jsx";
import ConfirmEmail from "./components/ConfirmEmail.jsx";
import SimpleLayout from "./layout/SimpleLayout.js";
import Dashboard from "./components/Dashboard.jsx";
import AvailabilityChecker from "./pages/AvailabilityChecker.jsx";
import IPChecker from "./pages/IPChecker.jsx";
import ExpiryChecker from "./pages/ExpiryChecker.jsx";
import PrivacyProtection from "./pages/PrivacyProtection.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
     <Route path="/confirm-email/:token" element={<ConfirmEmail />} />
    <Route path="/auth" element={<Authentication/>}/>
    <Route path="" element={<PrivateRoute />}>
    <Route path="/" element={<SimpleLayout />} >
    <Route exact path="/" element={<Home />} />
    <Route exact path="/Availability-Checker/" element={<AvailabilityChecker/>}/>
    <Route exact path="/IP-Checker/" element={<IPChecker/>}/>
    <Route exact path="/Expiry-Checker/" element={<ExpiryChecker/>}/>
    <Route exact path="/Privacy-Protection/" element={<PrivacyProtection/>}/>
    
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
