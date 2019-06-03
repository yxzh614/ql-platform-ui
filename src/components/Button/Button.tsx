import * as React from 'react'
import './Button.less'
import classnames from 'classnames'

export type ButtonProps = {
  text?: String,
  disabled?: Boolean,
  type: String,
  size: String,
  className: String,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default class extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props)
  }

  handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    
    const { onClick } = this.props;
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement>)(e)
    }
  }
  
  render() {
    const {
      text,
      className,
      disabled,
      type,
      size,
      ...others
    } = this.props as ButtonProps
    return (
      <button
        className={classnames(
          className,
          'ql-button',
          disabled ? 'disabled' : '',
          type,
          size
        )}
        onClick={this.handleClick}
        {...others}
      >
        {text || '按钮'}
      </button>
    )
  }
}