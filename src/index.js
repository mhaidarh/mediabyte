import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import App from "./containers/App"
import Routes from "./routes"

// We require the routes and render to the DOM using ReactDOM API
ReactDOM.render(
  <BrowserRouter>
    <App>
      <Routes />
    </App>
  </BrowserRouter>,
  document.getElementById("root")
)
