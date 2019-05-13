import React from 'react'
import './main.less'
export interface BadgeProps {
    label?: string
}


export default class extends React.Component<BadgeProps> {

    
    render () {
        const { children, label } = this.props
        return (
            <div className={'ql-badge-warpper'}>
                <span className={'ql-badge'}>{label}</span>
                {children}
            </div>
        )
    }
}