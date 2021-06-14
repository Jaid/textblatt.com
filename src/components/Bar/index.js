import classnames from "classnames"
import React from "react"

import CharactersWidget from "src/components/CharactersWidget"

import css from "./style.scss"

/**
 * @return {import("react").ReactElement}
 */
const Bar = props => {
  return <div className={classnames(css.container, props.className)}>
    <CharactersWidget/>
  </div>
}

export default Bar