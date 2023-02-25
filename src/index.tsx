import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import App from "./App";
import Join from "./SignUp";
import Router from "./Router";

const firebaseConfig = {
  apiKey: "AIzaSyB2mjVx3v_87tJ-lVP2TAVGYCajMyFX9iU",
  authDomain: "learn-firebase-2ebf6.firebaseapp.com",
  projectId: "learn-firebase-2ebf6",
  storageBucket: "learn-firebase-2ebf6.appspot.com",
  messagingSenderId: "515282344422",
  appId: "1:515282344422:web:1a1db8b2befc0789a89e27",
  measurementId: "G-7CTW2049SM",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
