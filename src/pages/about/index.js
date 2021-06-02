import PropTypes from "prop-types"
import React from "react"
import DocumentTitle from "react-document-title"

import css from "./style.scss"

/**
  * @typedef {Object} Props
  * @prop {*} className
  * @prop {Object} input
  * @prop {Object} input.abc
  */

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class AboutPage extends React.Component {

  static propTypes = {
    match: PropTypes.exact({
      isExact: PropTypes.bool.isRequired,
      path: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      params: PropTypes.object,
    }).isRequired,
  }

  render() {
    const content = <span>{process.env.REPLACE_PKG_TITLE} {process.env.REPLACE_PKG_VERSION}</span>
    return <DocumentTitle title="About - Textblatt">
      <main className={css.container}>
        {content}
      </main>
    </DocumentTitle>
  }

}