import * as React from 'react'
import './Input.less'
import classnames from 'classnames'

export interface InputProps {
  type: string
  disabled: boolean
  value: string
  defaultValue: string
  borderStyle: string
  className: string
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export default class extends React.Component<InputProps> {

  static getDerivedStateFromProps (nextPorps: InputProps) {
    if ('value' in nextPorps) {
      return {
        value: nextPorps.value,
      }
    }
    return null
  }

  constructor (props: InputProps) {
    super(props)
    const value = props.value || props.defaultValue
    this.state = {value}
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.props.onChange && this.props.onChange(e)
  }

  render() {
    const {
      type,
      className,
      disabled
    } = this.props
    const { value } = this.state; 
    if(type === 'textarea') {
      return (
        <textarea className={classnames(
          className,
          'ql-button',
          'textarea',
          disabled ? 'disabled' : ''
        )} onChange={this.handleChange} value={value}/>
      )
    }

    return (
      <input className="ql-input" type={type} onChange={this.handleChange} value={value}/>
    )
  }
}