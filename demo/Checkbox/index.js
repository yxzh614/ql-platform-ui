import React from 'react'
import ReactDOM from 'react-dom'
import {Checkbox, CheckboxGroup} from '../../src/components/Checkbox/index.tsx'

export default class extends React.Component {
    state = {
        check: false
    }

    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-checkbox">多选(Checkbox)</h2>
                    <div className="demo-info">
                      多选组件
                    </div>
                <Checkbox label={'checkbox'} checked={this.state.check} onChange={(e, c) => {console.log(e, c);this.setState({check: c})}}/>
                {/* <CheckboxGroup label={'checkbox'} checked={this.state.check} onChange={(e, c) => {console.log(e, c);this.setState({check: c})}}/> */}
            </div>
        )
    }
}