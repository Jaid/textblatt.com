import React from "react"
import ReactDom from "react-dom"

import App from "src/components/App"

require("@lcdp/offline-plugin/runtime").install()

document.body.innerHTML = "<div/>"
const rootNode = document.querySelector("body > div")

ReactDom.render(<App/>, rootNode)