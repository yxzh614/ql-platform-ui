import React from 'react'
// import {useState} from 'react'
import Icon from '../Icon'
import './main.less'
import classnames from 'classnames'

export interface CheckboxProps {
    checked: boolean
    label: string
    onChange: (e: React.MouseEvent, checked: boolean) => void
}

export default class extends React.Component<CheckboxProps> {
    // const [check, setCount] = useState(false)
    render () {
        const {
            onChange,
            label,
            checked
        } = this.props
        
        return (
            <div 
            className={'ql-checkbox'} 
            onClick = {(e) => {onChange && onChange(e, !checked)}}
            >
                <div className={
                    classnames('ql-checkbox-inner',
                    checked ? 'checked' : '')
                }>
                    <Icon type={'check'} />
                </div>
                <span className={'ql-checkbox-label'}>{label}</span>
            </div>
        )
    }
}