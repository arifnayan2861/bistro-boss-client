import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

import "./index.css";
import routes from "./routes/Routes";
// import AuthProvider from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={routes} />
    </div>
    {/* <Toaster /> */}
    {/* </AuthProvider> */}
  </React.StrictMode>
);
