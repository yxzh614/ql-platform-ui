import React from 'react'
import classnames from 'classnames'
import './main.less'

export interface AlertProps {
    title: string
    closeable?: boolean
    close?: string
    type?: string
}

export default class extends React.Component<AlertProps> {

    state = {
        visable: true
    }

    handleClick = (e: React.MouseEvent) => {
        const { closeable } = this.props
        if (closeable) {
            this.setState({visable: false})
        }
    }

    renderCloseButton = () => {
        const {closeable, close} = this.props
        if (closeable) {
            return (
                <div className={'ql-alert-close'} onClick={(e) => {}}>{close || '知道了'}</div>
            )
        }
        return null
    }

    render () {
        const  {title, type} = this.props
        return (
            <div className={
                classnames('ql-alert',
                    this.state.visable ? '' : 'hide',
                    type
                )
            }>
                <span>{title}</span>
                {this.renderCloseButton()}
            </div>
        )
    }
}