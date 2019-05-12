import React from 'react'
import './main.less'
import classnames from 'classnames'

export interface StepsProps {
    max: number
    current: number
}

export default class extends React.Component<StepsProps> {

    renderSteps () {
        const { max, current } = this.props
        return Array.from({length: max}, (item, key) => {
            return (
                <div key={key} className={
                    classnames('ql-steps-step',
                    current === key + 1 ? 'current' : '',
                    current > key + 1 ? 'finish' : ''
                    )
                }>
                    <div className={'ql-steps-label'}>
                        {key + 1}
                    </div>
                </div>
            )
        })
    }
    render () {
        return (
            <div className={'ql-steps'}>
                {this.renderSteps()}
            </div>
        )
    }
}