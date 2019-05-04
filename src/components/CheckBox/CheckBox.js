import React from 'react'
import {useState} from 'react'
export default function (props) {
    const [count, setCount] = useState(false)
    const {
        onChange,
        children
    } = props
    return (
        <div>
            <input className={'ql-checkbox'} type={'checkbox'} value={count} onClick={(e) => {onChange(e, !count);setCount(!count)}}/>
            {children}
        </div>
    )
}