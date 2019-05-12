import React from 'react';
import ReactDOM from 'react-dom'
import Steps from '../../src/components/Steps/index.tsx'


export default class extends React.Component {

    state = {
        value: '22'
    }

    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-steps">步骤(steps)</h2>
                <Steps max={4} current={2} />    
            </div>
        )
    }
}