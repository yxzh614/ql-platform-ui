import * as React from 'react';
import Icon from 'antd/lib/Icon'

export type ButtonProps = {
  type: string,
  className: string,
}

export default class extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props)
  }

  render() {
    const {
      type
    } = this.props as ButtonProps
    return (
        <Icon type={type} />
    )
  }
}