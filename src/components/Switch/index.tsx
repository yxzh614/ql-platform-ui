import React from 'react'
// import {useState} from 'react'
import './main.less'
import classnames from 'classnames'

export interface CheckboxProps {
    checked: boolean
    onChange: (e: React.MouseEvent, checked: boolean) => void
}

export default function (props: CheckboxProps) {
    // const [check, setCount] = useState(false)
    const {
        onChange,
        checked
    } = props
    return (
        <div 
        className={'ql-switch'} 
        onClick = {(e) => {onChange && onChange(e, !checked)}}
        >
            <div className={
                classnames('ql-switch-warpper',
                checked ? 'checked' : '')
            }>
                <div className={'ql-switch-inner'}></div>
            </div>
        </div>
    )
}