import React from "react"
import ReactDom from "react-dom"

import HotApp from "src/components/HotApp"

document.body.innerHTML = "<div/>"
const rootNode = document.querySelector("body > div")

ReactDom.render(<HotApp/>, rootNode)