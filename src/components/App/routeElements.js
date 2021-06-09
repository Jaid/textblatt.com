import React from "react"
import {Route} from "react-router-dom"

import IndexPage from "src/pages/index"

const routes = {
  "/": IndexPage,
}

const routeElements = Object.entries(routes).map(entry => {
  const route = entry[0]
  const page = entry[1]
  return <Route key={`${route}`} component={page} path={route} exact/>
})

export default routeElements