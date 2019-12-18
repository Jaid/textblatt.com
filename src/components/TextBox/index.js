import PropTypes from "prop-types"
import React from "react"

import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  *   input: *,
  * }} Props
  */

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
    input: PropTypes.object.isRequired,
  }

  handleChange(event) {
    this.props.input.onChange(event)
  }

  render() {
    return <textarea className={css.container} onChange={this.handleChange.bind(this)}/>
  }

}