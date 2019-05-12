import React from 'react'
import './main.less'
import classnames from 'classnames'

export interface TimelinesProps {
    datasource: Array<string>
    active: number
}

export default class extends React.Component<TimelinesProps> {

    renderTimeline () {
        const { datasource, active } = this.props
        if (datasource && datasource.length) {
            return datasource.map((item: string, key: number) => {
                return (
                    <div key={key} className="ql-timeline-item">
                        <div className={'ql-timeline-tail'}></div>
                        <div className={'ql-timeline-head'}></div>
                        <div className={'ql-timeline-content'}>{item}</div>
                    </div>
                )
            })
        }
        return null
    }
    render () {
        return (
            <div className={'ql-timeline'}>
                {this.renderTimeline()}
            </div>
        )
    }
}