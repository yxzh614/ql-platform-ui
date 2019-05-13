import React from 'react'
import classnames from 'classnames'
import './main.less'
import Icon from '../Icon';


export interface LoadingProps {
    visable: boolean
}

export default class extends React.Component<LoadingProps> {
    render () {
        const { children, visable } = this.props
        return (
            <div className={'ql-loading-warpper'}>
                <div className={
                    classnames('ql-loading',
                    visable ? '' : 'hide'
                    )
                }>
                    <Icon className={'ql-loading-icon'} type={'flow-o'} />
                </div>
                {children}
            </div>
        )
    }
}