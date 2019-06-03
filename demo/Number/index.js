import React from 'react';
import ReactDOM from 'react-dom'
import { Number } from '../../src'

export default class extends React.Component {
    state = {
        value: ''
    }

    render () {
        return (
            <div className="demo-block">
                <h2 id="ql-number">数字输入(Number)</h2>
                    <div className="demo-info">
                      提供数字输入功能，从键盘输入或者通过按钮点击
                    </div>
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