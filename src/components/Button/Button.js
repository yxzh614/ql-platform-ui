import React from 'react'
import './Button.less'
import classnames from 'classnames'
export default class extends React.Component {
  constructor() {
    super()
    this.defaultText = '按钮'
  }
  handleClick (e) {
    if (this.props.onClick) {
      this.props.onClick(e)
    }
  }
  render() {
    const {
      text,
      style,
      className,
      disabled,
      type,
      size
    } = this.props
    return (
      <button
        className={classnames(
          className,
          'ql-button',
          disabled ? 'disabled' : '',
          type
        )}
        style={style}
        onClick={this.handleClick.bind(this)}
      >
        {text || this.defaultText}
      </button>
    )
  }
}