import * as React from 'react'
import './Input.less'
import classnames from 'classnames'
import Icon from '../Icon/Icon.tsx'

export interface InputProps {
  type: string
  disabled: boolean
  value: string
  defaultValue: string
  borderStyle: string
  className: string
  clearable: boolean
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

  input: HTMLInputElement
  
  constructor (props: InputProps) {
    super(props)
    const value = props.value || props.defaultValue 
    this.state = {value}
  }

  saveInput = (node: HTMLInputElement) => {
    this.input = node
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.props.onChange && this.props.onChange(e)
  }

  handleReset = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { onChange } = this.props
    let event = Object.create(e)
    if (onChange) {
      // make a new event object
      event.target = this.input
      event.currentTarget = this.input
      this.input.value = ''
      onChange(event as React.ChangeEvent<HTMLInputElement>)
    }
  }

  renderSuffix = () => {
    const { clearable } = this.props
    if (clearable) {
      return (
        <span className='qi-input-suffix' onClick={this.handleReset}>
          <Icon type={'close-circle'} />
        </span>
      )
    }
    return null
  }

  render() {
    const {
      type,
      className,
      disabled,
      clearable
    } = this.props
    const { value } = this.state

    if (type === 'textarea') {
      return (
        <textarea className={classnames(
          className,
          'ql-input',
          'ql-textarea',
          disabled ? 'disabled' : ''
        )} onChange={this.handleChange} value={value}/>
      )
    }

    return (
      <div className='ql-input-warpper'>
        <input  className={classnames(
          className,
          'ql-input',
          clearable ? 'with-suffix' : '',
          disabled ? 'disabled' : ''
        )}
        type={type}
        onChange={this.handleChange}
        value={value}
        ref={this.saveInput}
        />
        {this.renderSuffix()}
      </div>
    )
  }
}