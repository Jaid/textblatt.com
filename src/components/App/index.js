import "modern-normalize"
import "./analytics"

import classnames from "classnames"
import ensureArray from "ensure-array"
import PropTypes from "prop-types"
import React from "react"
import {Route, Router, Switch} from "react-router-dom"
import ReactRouterScrollTop from "react-router-scroll-top"

import history from "./history"
import routes from "./routes.yml"
import css from "./style.scss"

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class App extends React.Component {

  static getRoutes() {
    const routeBlocks = []
    for (const [index, [id, paths]] of Object.entries(routes).entries()) {
      for (const [pathIndex, path] of ensureArray(paths).entries()) {
        routeBlocks.push(<Route key={`${index}-${pathIndex}`} component={require(`../../pages/${id}`).default} path={path} exact/>)
      }
    }
    return routeBlocks
  }

  render() {
    const routeElements = App.getRoutes()
    return <div className={classnames(css.container)}>
      <Router history={history}>
        <ReactRouterScrollTop>
          <Switch>
            {routeElements}
          </Switch>
        </ReactRouterScrollTop>
      </Router>
    </div>
  }

}