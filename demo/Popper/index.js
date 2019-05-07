import React from 'react';
import ReactDOM from 'react-dom'
import Popper from '../../src/components/Popper/index.tsx'

export default class extends React.Component {
    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-button">浮层(Popper)</h2>
            <Popper />
            </div>
        )
    }
}