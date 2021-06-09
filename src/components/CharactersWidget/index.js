import classnames from "classnames"
import React, {useContext} from "react"
import zahl from "zahl"

import InputContext from "src/contexts/InputContext"

import css from "./style.scss"

/**
 * @param {Props} props
 * @return {import("react").ReactElement}
 */
const CharactersWidget = props => {
  const {text} = useContext(InputContext)
  const countString = zahl(text.length, "character")
  return <div className={classnames(css.container, props.className)}>
    {countString}
  </div>
}

export default CharactersWidget