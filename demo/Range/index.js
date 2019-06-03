import React from 'react'
import ReactDOM from 'react-dom'
import { Range } from '../../src'

export default class extends React.Component {
    state = {
        value: 10
    }

    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-range">滑动条(Range)</h2>
                    <div className="demo-info">
                        设置指定范围内的某个值
                    </div>
                <Range max={1000} min={10} step={10} value={this.state.value} onChange={(e) => {this.setState({value: e.target.value})}} />
            </div>
        )
    }
}