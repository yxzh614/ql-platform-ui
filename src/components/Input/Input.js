import React from 'react'
import './Input.less'
export default class extends React.Component {

  constructor() {
    super()
  }

  handleChange(e) {
    this.props.onChange && this.props.onChange(e)
  }

  render() {
    const {
      type,
      value = ''
    } = this.props

    if(type === 'textarea') {
      return (
        <textarea className="ql-input textarea" onChange={(e) => this.handleChange(e)} value={value}/>
      )
    }

    return (
      <input className="ql-input" type="text" />
    )
  }
}