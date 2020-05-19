<<<<<<< HEAD
import "unfetch/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { WordProvider } from "./contexts/WordContext";
import App from "./components/App/App";
import "./setup-icons";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
=======
import 'unfetch/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import App from './components/App/App';
import './setup-icons';
import './index.css';
import * as serviceWorker from './serviceWorker';
>>>>>>> cc183f9263a14fe5c75356459b688f648d377930

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
<<<<<<< HEAD
      <WordProvider>
        <App />
      </WordProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
=======
      <App />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root'),
>>>>>>> cc183f9263a14fe5c75356459b688f648d377930
);

serviceWorker.unregister();
