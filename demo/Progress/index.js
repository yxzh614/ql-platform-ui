import React from 'react';
import ReactDOM from 'react-dom'
import Progress from '../../src/components/Progress/Progress.tsx'

export default class extends React.Component {
    state = {
        progress: 0
    }

    componentDidMount () {
        setTimeout(() => {this.setState({progress: Math.random()})}, 1000)        
    }
    render () {
        return (
            <div>
                <Progress progress={this.state.progress} />
            </div>
        )
    }
}