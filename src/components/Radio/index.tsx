import React from 'react'

export interface RadioProps {
    checked: boolean,
    onChange: React.ChangeEventHandler,
    label: string
}

export default class extends React.Component<RadioProps> {

    handleChange = (e: React.ChangeEvent) => {
        this.props.onChange && this.props.onChange(e)
    }

    
    // static getDerivedStateFromProps (nextPorps: InputProps) {
    //     if ('value' in nextPorps) {
    //         return {
    //             value: nextPorps.value,
    //         }
    //     }
    //     return null
    // }

    render () {

        const { checked, label } = this.props

        return (
            <div>
                <label>
                    <input type='radio' checked={checked} onChange={this.handleChange}/>{label}
                </label>
            </div>
        )
    }
}