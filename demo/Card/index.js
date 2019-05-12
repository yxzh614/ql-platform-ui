import React from 'react';
import ReactDOM from 'react-dom'
import Card from '../../src/components/Card/index.tsx'

export default class extends React.Component {
    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-button">卡片(Card)</h2>
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