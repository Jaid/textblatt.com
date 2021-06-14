import React, {useEffect, useRef} from "react"
import {useDispatch, useSelector} from "react-redux"

import css from "./style.scss"

/**
  * @typedef {Object} Props
  */

/**
 * @return {import("react").ReactElement}
 */
const TextBox = () => {
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
  })
  const dispatch = useDispatch()
  const text = useSelector(state => state.text.value)
  const handleChange = event => {
    dispatch({
      type: "text/set",
      payload: event.target.value,
    })
  }
  return <textarea ref={inputRef} className={css.container} value={text} onChange={handleChange}/>
}

export default TextBox