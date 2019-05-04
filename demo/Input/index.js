import React from 'react';
import ReactDOM from 'react-dom'
import Input from '../../src/components/Input/Input.tsx'

export default class extends React.Component {
    state = {
        value: '',
        textarea: '',
        password: ''
    }

    render () {
        return (
            <div>
                <div className="demo-input-block">
                    textarea输入框：<Input type='textarea' onChange={(e, value) => {this.setState({textarea: e.target.value})}} value={this.state.textarea} />
                    {this.state.textarea}
                </div>
                <div className="demo-input-block">
                    输入框：<Input type='text' onChange={(e, value) => {this.setState({value: e.target.value})}} value={this.state.value} />
                    {this.state.value}
                </div>
                <div className="demo-input-block">
                    输入密码：<Input type='password' onChange={(e, value) => {this.setState({password: e.target.value})}} value={this.state.password} />
                    {this.state.password}
                </div>
            </div>
        )
    }
}