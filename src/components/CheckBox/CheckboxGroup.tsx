import React from 'react'

import Checkbox from './'
import CheckboxProps from './checkbox'


export interface CheckboxGroupProps {
    options: Array<CheckboxGroupProps>
}

export default class extends React.Component<any> {

    state = {
        value: []
    }

    componentDidMount () {
        console.log(Checkbox)
    }

    // handleClick (e, key) {
    //     cosnt newVal = this.state.value.map(_ => {
              
    //     })

    // }

    renderList () {
        const { options } = this.props
        if (options && options.length) {
            return options.map((item: CheckboxGroupProps, key: number) => {
                // <Checkbox label={'checkbox'} checked={this.state.value[key]} onChange={(e, c) => {console.log(e, c);this.setState({check: c})}}/>
            })
        }
    }

    render () {
        return (<div>21323423</div>)
    }
}