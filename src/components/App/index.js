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

export default class App extends React.Component {

  static getRoutes() {
    const routeBlocks = []
    Object.entries(routes).forEach(([id, paths], index) => {
      ensureArray(paths).forEach((path, pathIndex) => {
        routeBlocks.push(<Route key={`${index}-${pathIndex}`} component={require(`../../pages/${id}`).default} path={path} exact/>)
      })
    })
    return routeBlocks
  }

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
  }

  render() {
    const routeElements = App.getRoutes()
    return <div className={classnames(css.container, this.props.className)}>
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