import React from 'react'
import classnames from 'classnames'
import './main.less'

export interface AlertProps {
    title: string
    closable: boolean
    close: string
    type?: string
}

export default class extends React.Component<AlertProps> {

    state = {
        visable: true
    }

    render () {
        const  {title, type, close} = this.props
        return (
            <div className={
                classnames('ql-alert',
                    this.state.visable ? '' : 'hide',
                    type
                )
            }>
                <span>{title}</span>
                <div className={'ql-alert-close'} onClick={(e) => {this.setState({visable: false})}}>{close}</div>
            </div>
        )
    }
}