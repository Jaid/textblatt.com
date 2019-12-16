import classnames from "classnames"
import {isEmpty} from "has-content"
import {orderBy} from "lodash"
import PropTypes from "prop-types"
import React from "react"
import {connect} from "react-redux"

import isGhostChatter from "lib/isGhostChatter"
import roles from "lib/roles"
import Tooltip from "components/Tooltip"

import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  * }} Props
  */

function orderChatter(chatter) {
  return Object.keys(roles).indexOf(chatter.role) || -1
}

@connect(state => ({
  chatters: state.main.chatters,
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
    chatters: PropTypes.arrayOf(PropTypes.any),
  }

  render() {
    if (isEmpty(this.props.chatters)) {
      return ""
    }
    const filteredChatters = this.props.chatters.filter(chatter => !isGhostChatter(chatter))
    const orderedChatters = orderBy(filteredChatters, [orderChatter, "login"])
    const blocks = orderedChatters.map(chatter => {
      const avatar = chatter.avatarUrl
      const style = {
        border: `1px solid ${roles[chatter.role]?.borderColor || "black"}`,
      }
      const tooltip = <div><img className={css.inlineAvatar} src={avatar}/><br/>{chatter.displayName}<br/>{chatter.login}</div>
      return <Tooltip key={chatter.login} html={tooltip}>
        <img className={css.chatter} src={avatar} style={style}/>
      </Tooltip>
    })
    const content = <span>{blocks}</span>
    return <div className={classnames(css.container, this.props.className)}>
      {content}
    </div>
  }

}