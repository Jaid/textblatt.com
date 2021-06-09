import React, {useContext, useRef} from "react"

import InputContext from "src/contexts/InputContext"

import css from "./style.scss"

/**
  * @typedef {Object} Props
  * @prop {*} [className]
  * @prop {Object} input
  */

/**
 * @param {Props} props
 * @return {import("react").ReactElement}
 */
const TextBox = props => {
  const context = useContext(InputContext)
  const handleChange = event => {
    context.setText(event.target.value)
  }
  return <textarea className={css.container} value={context.text} onChange={handleChange}/>
}

export default TextBox