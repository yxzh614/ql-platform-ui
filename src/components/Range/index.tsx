import React from 'react'
import './main.less'

export interface RangeProps {
    max: number
    min: number
    step: number
    value: number
    onChange: React.ChangeEventHandler
}

export default class extends React.Component<RangeProps> {
    render () {
        const {max, min, step, value, onChange} = this.props
        return (
            <div className={'ql-range'}>
                <input type="range" max={max} min={min} step={step} value={value} onChange={onChange}/>
                <span>{value}</span>
            </div>
        )
    }
}