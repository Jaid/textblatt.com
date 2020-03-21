import classnames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import {connect} from "react-redux"
import zahl from "zahl"

import css from "./style.scss"

/**
  * @typedef {Object} Props
  * @prop {*} className
  * @prop {number} count
  */

@connect(({form}) => ({
  count: form?.controls?.values?.text?.length || 0,
}))

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class extends React.Component {

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
    count: PropTypes.number,
  }

  render() {
    const countString = zahl(this.props.count, "character")
    return <div className={classnames(css.container, this.props.className)}>
      {countString}
    </div>
  }

}