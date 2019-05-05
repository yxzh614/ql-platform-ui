import React from 'react';
import ReactDOM from 'react-dom'
import Progress from '../../src/components/Progress/index.tsx'

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
                <h2>进度条(Progress)</h2>
                <Progress progress={this.state.progress} />
            </div>
        )
    }
}