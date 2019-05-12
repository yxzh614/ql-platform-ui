import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import Radio from '../../src/components/Radio/index.tsx'


export default function (props) {

    const [checked, setCheck] = useState(false)
    
    return (
        <div className="demo-block">
        <h2 id="ql-button">单选(radio)</h2>
            <Radio checked={checked} onChange={(e) => {setCheck(!checked)}} label={'radio'} />
        </div>
    )
}