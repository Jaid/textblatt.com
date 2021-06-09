import React from "react"
import ReactDom from "react-dom"

import HotApp from "src/components/HotApp"

const rootNode = document.querySelector("body > div")

ReactDom.render(<HotApp/>, rootNode)