import classnames from "classnames"
import React from "react"
import {useSelector} from "react-redux"
import zahl from "zahl"

import css from "./style.scss"

/**
 * @return {import("react").ReactElement}
 */
const CharactersWidget = props => {
  const text = useSelector(state => state.text.value)
  const countString = zahl(text.length, "character")
  return <div className={classnames(css.container, props.className)}>
    {countString}
  </div>
}

export default CharactersWidget