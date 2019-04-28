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
      size,
      ...others
    } = this.props
    return (
      <button
        className={classnames(
          className,
          'ql-button',
          disabled ? 'disabled' : '',
          type,
          size
        )}
        style={style}
        onClick={this.handleClick.bind(this)}
        {...others}
      >
        {text || this.defaultText}
      </button>
    )
  }
}