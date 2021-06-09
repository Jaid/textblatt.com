import React, {useRef} from "react"

import css from "./style.scss"

/**
  * @typedef {Object} Props
  * @prop {*} className
  * @prop {Object} input
  */

/**
 * @param {Props} props
 * @return {import("react").ReactElement}
 */
const TextBox = props => {
  const ref = useRef()
  const handleChange = () => {

  }
  return <textarea ref={ref} className={css.container} onChange={handleChange}/>
}

export default TextBox