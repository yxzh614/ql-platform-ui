import React from 'react';
import ReactDOM from 'react-dom'
import Button from '../../src/components/Button/index.tsx'
import Message, { message } from '../../src/components/Message/index.tsx'

export default class extends React.Component {
    state = {
        value: '',
        textarea: '',
        password: ''
    }

    render () {
        return (
            <div className="demo-block">
                <h2 id="ql-message">消息(Message)</h2>
                    <div className="demo-info">
                      在窗口顶部弹出提示信息
                    </div>
                    <Button onClick={(e) => {message('在窗口顶部弹出提示信息')}} text={'显示信息'}></Button>
            </div>
        )
    }
}