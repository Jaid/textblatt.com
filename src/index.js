import React from "react"
import ReactDom from "react-dom"
import {Provider} from "react-redux"

import App from "components/App"

import store from "src/redux/productionStore"

const rootNode = document.createElement("div")
document.body.append(rootNode)

ReactDom.render(<Provider store={store}>
  <App/>
</Provider>, rootNode)