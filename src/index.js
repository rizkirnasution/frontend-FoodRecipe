import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "./router/browserHistory";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { injectStore } from "./utils/http";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

injectStore(store)
const root = ReactDOM.createRoot(document.getElementById("root"));

const { REACT_APP_NAME } = process.env;

root.render(
  <ReduxProvider store={store}>
    <PersistGate persistor={persistor}>
      <HelmetProvider>
        <Helmet>
          <title>{REACT_APP_NAME}</title>
          <link rel="canonical" href={window.location.href} />
        </Helmet>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </HelmetProvider>
    </PersistGate>
  </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
