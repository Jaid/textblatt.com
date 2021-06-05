import PropTypes from "prop-types"
import React from "react"
import {Field, Form} from "react-final-form"

import TextBox from "src/components/TextBox"

import css from "./style.scss"

/**
  * @typedef {Object} Props
  * @prop {*} className
  */

@reduxForm({
  form: "controls",
})

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class extends React.Component {

  static propTypes = {
    className: PropTypes.any,
  }

  render() {
    return <form className={css.container}>
      <Field component={TextBox} name="text"/>
    </form>
  }

}