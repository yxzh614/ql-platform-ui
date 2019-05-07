import React from 'react'
import {useState} from 'react'

export interface CheckboxProps {
    label: string,
    onChange: React.ChangeEventHandler,
    key: string 
}

export default function (props: CheckboxProps) {
    const [check, setCount] = useState(false)
    const {
        onChange,
        label,
        key
    } = props
    return (
        <div>
            <input id={key} className={'ql-checkbox'} type={'checkbox'} checked={check} onChange={(e) => {onChange(e); setCount(!check)}}/>
            <label htmlFor={key}>{label}</label>
        </div>
    )
}