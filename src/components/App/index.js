import "modern-normalize"
import "./analytics"

import classnames from "classnames"
import React from "react"
import {Router, Switch} from "react-router-dom"

// import ReactRouterScrollTop from "react-router-scroll-top"
import history from "./history"
import routeElements from "./routeElements"
import css from "./style.scss"

/**
 * @return {import("react").ReactElement}
 */
const App = () => {
  return <div className={classnames(css.container)}>
    <Router history={history}>
      {/* <ReactRouterScrollTop> */}
      <Switch>
        {routeElements}
      </Switch>
      {/* </ReactRouterScrollTop> */}
    </Router>
  </div>
}

export default App