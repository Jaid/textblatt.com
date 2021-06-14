import React from "react"
import ReactDom from "react-dom"

import App from "src/components/App"

require("@lcdp/offline-plugin/runtime").install()

const rootNode = document.createElement("div")
document.body.append(rootNode)
ReactDom.render(<App/>, rootNode)