import React from 'react'
import {useState} from 'react'
export default function (props) {
    const [count, setCount] = useState(false)
    const {
        onChange
    } = props
    return (
        <div>
            <input type={'checkbox'} value={count} onClick={(e) => {onChange(e, !count);setCount(!count)}}/>
        </div>
    )
}