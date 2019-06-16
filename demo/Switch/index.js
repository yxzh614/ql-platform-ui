import React from 'react'
import ReactDOM from 'react-dom'
import { Switch } from '../../src'

export default class extends React.Component {
    state = {
        check: false
    }

    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-switch">开关(Switch)</h2>
                    <div className="demo-info">
                      开关组件
                    </div>
                <Switch label={'checkbox'} checked={this.state.check} onChange={(e, c) => {console.log(e, c);this.setState({check: c})}}/>
                {/* <CheckboxGroup label={'checkbox'} checked={this.state.check} onChange={(e, c) => {console.log(e, c);this.setState({check: c})}}/> */}
            </div>
        )
    }
}