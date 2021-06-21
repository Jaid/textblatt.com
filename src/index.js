import React from "react"
import ReactDom from "react-dom"

import App from "src/components/App"

const rootNode = document.querySelector("body>div")
ReactDom.render(<App/>, rootNode)