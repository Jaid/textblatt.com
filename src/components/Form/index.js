import PropTypes from "prop-types"
import React from "react"
import {Field, reduxForm} from "redux-form"

import TextBox from "components/TextBox"

import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  * }} Props
  */

@reduxForm({
  form: "controls",
})

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class Form extends React.Component {

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
  }

  render() {
    return <form className={css.container}>
      <Field component={TextBox} name="text"/>
    </form>
  }

}