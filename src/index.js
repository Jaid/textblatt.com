import React from "react"
import ReactDom from "react-dom"

import App from "src/components/App"

require("@lcdp/offline-plugin/runtime").install()

const rootNode = document.querySelector("body > div")

ReactDom.render(<App/>, rootNode)