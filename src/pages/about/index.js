import PropTypes from "prop-types"
import React from "react"
import DocumentTitle from "react-document-title"

import css from "./style.scss"

/**
  * @typedef {{
  *   match: {
  *    isExact: boolean
  *    path: string
  *    url: string
  *    params: object.<string, string>
  *  },
  * }} Props
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
    const content = <span>{_PKG_TITLE} {_PKG_VERSION}</span>
    return <DocumentTitle title="About - Letter Bar">
      <main className={css.container}>
        {content}
      </main>
    </DocumentTitle>
  }

}