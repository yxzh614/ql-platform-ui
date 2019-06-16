import React from 'react'
import './Card.less'

export interface cardProps {
    children: React.ReactElement
    title: String
}

export default class extends React.Component<any> {

    componentDidMount () {

    }

    render () {
        const { children, title } = this.props
        return (
            <div className={'ql-card-warpper'}>
                <div className='ql-card-title'>{title}</div>
                <div className='ql-card-container'>{children}</div>
            </div>
        )
    }
}