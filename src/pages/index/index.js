import React from "react"

import Bar from "src/components/Bar"
import TextBox from "src/components/TextBox"

import css from "./style.scss"

/**
 * @return {import("react").ReactElement}
 */
const IndexPage = () => {
  return <main className={css.container}>
    <TextBox/>
    <Bar/>
  </main>
}

export default IndexPage