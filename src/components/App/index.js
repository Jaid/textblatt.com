import "modern-normalize"
import "lib/analytics"

import classnames from "classnames"
import PropTypes from "prop-types"
import React from "react"

import Bar from "components/Bar"
import Form from "components/Form"

import css from "./style.scss"

export default class extends React.Component {

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
  }

  render() {
    return <div className={classnames(css.container, this.props.className)}>
      <Form/>
      <Bar/>
    </div>
  }

}