import React from 'react';
import ReactDOM from 'react-dom'
import { Progress } from '../../src'

export default class extends React.Component {
    state = {
        progress: 0
    }

    componentDidMount () {
        setInterval(() => {this.setState({progress: Math.random()})}, 1500)        
    }
    render () {
        return (
            <div className="demo-block">
                <h2 id="ql-progress">进度条(Progress)</h2>
                    <div className="demo-info">
                      展示百分比进度值
                    </div>
                <Progress progress={this.state.progress} />
            </div>
        )
    }
}