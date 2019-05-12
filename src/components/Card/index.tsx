import React from 'react'
import './Card.less'

export interface cardProps {
    children: React.ReactElement
}

export default class extends React.Component<any> {

    componentDidMount () {

    }

    render () {
        const { children } = this.props
        return (
            <div className={'ql-card-warpper'}>
                <div className='ql-card-title'>Title</div>
                <div className='ql-card-container'>{children}</div>
            </div>
        )
    }
}