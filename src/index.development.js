import React from "react"
import ReactDom from "react-dom"
import {Provider} from "react-redux"
import store from "src/redux/developmentStore"

import HotApp from "components/HotApp"

require("offline-plugin/runtime").install()

const rootNode = document.createElement("div")
document.body.append(rootNode)

ReactDom.render(<Provider store={store}>
  <HotApp/>
</Provider>, rootNode)