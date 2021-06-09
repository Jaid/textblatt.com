import classnames from "classnames"
import React from "react"
import zahl from "zahl"

import css from "./style.scss"

/**
 * @param {Props} props
 * @return {import("react").ReactElement}
 */
const Bar = props => {
  const countString = zahl(props.count, "character")
  return <div className={classnames(css.container, props.className)}>
    {countString}
  </div>
}

export default Bar