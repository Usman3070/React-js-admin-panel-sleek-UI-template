import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

const CLIENT_ID= process.env.REACT_APP_CLIENT_ID
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App />
      <ToastContainer />
    </GoogleOAuthProvider>
  </Provider>
);
