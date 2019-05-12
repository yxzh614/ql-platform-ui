import React from 'react';
import ReactDOM from 'react-dom'
import Card from '../../src/components/Card/index.tsx'

export default class extends React.Component {
    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-card">卡片(Card)</h2>
                    <div className="demo-info">
                      卡片组件使用卡片形式展示内容，可以设置标题
                    </div>
            <Card>
                <ul style={{width: '200px'}}>
                    <li>222</li>
                    <li>222</li>
                    <li>222</li>
                    <li>222</li>
                </ul>
            </Card>
            </div>
        )
    }
}