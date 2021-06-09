import React from "react"

import Bar from "src/components/Bar"
import TextBox from "src/components/TextBox"
import InputContext, {InputProvider} from "src/contexts/InputContext"

import css from "./style.scss"

/**
 * @return {import("react").ReactElement}
 */
const IndexPage = () => {
  return <main className={css.container}>
    <InputProvider>
      <TextBox/>
      <Bar/>
    </InputProvider>
  </main>
}

export default IndexPage