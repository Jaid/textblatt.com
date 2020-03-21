import PropTypes from "prop-types"
import React from "react"

import css from "./style.scss"

/**
  * @typedef {Object} Props
  * @prop {*} className
  * @prop {Object} input
  */

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class extends React.Component {

  static propTypes = {
    className: PropTypes.any,
    input: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.ref.current.focus()
  }

  handleChange(event) {
    this.props.input.onChange(event)
  }

  render() {
    return <textarea ref={this.ref} className={css.container} onChange={this.handleChange.bind(this)}/>
  }

}