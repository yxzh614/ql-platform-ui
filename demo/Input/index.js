import React from 'react'
import ReactDOM from 'react-dom'
import Input from '../../src/components/Input/index.tsx'

export default class extends React.Component {
    state = {
        value: '',
        textarea: '',
        password: '',
        clearable: ''
    }

    render () {
        return (
            <div className="demo-block">
                <h2 id="ql-input">输入框(Input)</h2>
                <div className="demo-info">
                    文本输入组件
                </div>
                <div className="demo-input-block">
                    <h3>输入框</h3>
                    <Input type='text' onChange={(e, value) => {this.setState({value: e.target.value})}} value={this.state.value} />
                    <h3>输入框（可清空）</h3>
                    <div className="demo-info">
                        点击清空按钮可以删除输入的内容
                    </div>
                    <Input type='text' clearable onChange={(e, value) => {this.setState({clearable: e.target.value})}} value={this.state.clearable} />
                </div>
                <div className="demo-input-block">
                    <h3>textarea输入框</h3>
                    <div className="demo-info">
                        输入文字段落
                    </div>
                    <Input type='textarea' onChange={(e, value) => {this.setState({textarea: e.target.value})}} value={this.state.textarea} />
                </div>
                <div className="demo-input-block">
                    <h3>输入密码</h3>
                    <Input type='password' onChange={(e, value) => {this.setState({password: e.target.value})}} value={this.state.password} />
                </div>
            </div>
        )
    }
}