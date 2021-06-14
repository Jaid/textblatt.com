import "modern-normalize"
import "./analytics"

import classnames from "classnames"
import React from "react"
import {Provider} from "react-redux"
import {Router, Switch} from "react-router-dom"

import store from "src/redux/store"

// import ReactRouterScrollTop from "react-router-scroll-top"
import history from "./history"
import routeElements from "./routeElements"
import css from "./style.scss"

/**
 * @return {import("react").ReactElement}
 */
const App = () => {
  return <Provider store={store}>
    <div className={classnames(css.container)}>
      <Router history={history}>
        {/* <ReactRouterScrollTop> */}
        <Switch>
          {routeElements}
        </Switch>
        {/* </ReactRouterScrollTop> */}
      </Router>
    </div>
  </Provider>
}

export default App