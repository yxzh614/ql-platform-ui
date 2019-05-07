import React from 'react'
import {useState} from 'react'

export interface CheckboxProps {
    label: string,
    onChange: React.ChangeEventHandler,
    refid: string 
}

export default function (props: CheckboxProps) {
    const [check, setCount] = useState(false)
    const {
        onChange,
        label,
        refid
    } = props
    return (
        <div>
            <input id={refid} className={'ql-checkbox'} type={'checkbox'} checked={check} onChange={(e) => {onChange(e); setCount(!check)}}/>
            <label htmlFor={refid}>{label}</label>
        </div>
    )
}