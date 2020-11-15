import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./component/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth0ProviderWithHistory from "./auth0-provider-with-history";
import { BrowserRouter as Router } from "react-router-dom"; //Le Router est necessaire pour afficher la redirection une fois logger vers le l'URL http://localhost:3000/

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
