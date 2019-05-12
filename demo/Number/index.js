import React from 'react';
import ReactDOM from 'react-dom'
import Number from '../../src/components/Number/index.tsx'

export default class extends React.Component {
    state = {
        value: ''
    }

    render () {
        return (
            <div className="demo-block">
                <h2 id="ql-number">数字输入(Number)</h2>
                <div className="demo-info">
                    数字输入组件
                </div>
                <div className="demo-number-block">
                    <h3>输入框</h3>
                    <Number type='text' onChange={(e, value) => {this.setState({value: e.target.value})}} value={this.state.value} />
                </div>
            </div>
        )
    }
}