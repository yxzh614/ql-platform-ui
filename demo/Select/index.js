import React from 'react';
import ReactDOM from 'react-dom'
import Select from '../../src/components/Select/index.tsx'
import Button from '../../src/components/Button/index.tsx'

const options = [{
    label: 'op1',
    value: '1'
},{
    label: 'op2',
    value: '2'
},{
    label: 'op3',
    value: '3'
}]

export default class extends React.Component {

    state = {
        value: '22'
    }

    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-select">选择(Select)</h2>
                    <div className="demo-info">
                      从下拉选择中选择内容
                    </div>
                <Select value={this.state.value} options={options} handleChange={(e, value) => {console.log(value);this.setState({value})}}/>
            </div>
        )
    }
}