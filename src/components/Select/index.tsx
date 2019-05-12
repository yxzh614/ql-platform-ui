import React from 'react';
import './main.less'
import classnames from 'classnames'

export interface SelectProps {
    options: Array<SelectOption>
    handleChange: (e: React.MouseEvent, value: string) => void
    value: string
}

export interface SelectOption {
    label: string
    value: string
}

export default class extends React.Component<SelectProps> {

    state = {
        visiable: false
    }

    handleClick = () => {
        this.setState({
            visiable: !this.state.visiable
        })
    }

    handleOptionClick = (e: React.MouseEvent, value: string) => {
        this.props.handleChange && this.props.handleChange(e, value)
    }

    renderPopper () {
        const { visiable } = this.state
        if (!visiable) {
            return null
        }
        return (
            <div className={classnames('ql-popper-popout', 'bottom')}>
                <div className={classnames("ql-popper-popper")}>
                    <div className={'ql-popper-container'}>
                        {this.renderOptions()}
                    </div>
                </div>
            </div>
        )
    }

    renderOptions () {
        const { options } = this.props
        return options.map((item: SelectOption, key: number) => {
            return (
                <div className={'ql-select-option'} key={key} onClick={(e: React.MouseEvent) => {
                    this.handleOptionClick(e, item.value)
                }}>{item.label}</div>
            )
        })
    }

    renderSelecter () {
        const { value, options } = this.props
        let text: string = ''
        options.forEach((item: SelectOption) => {
            if (value === item.value) {
                text = item.label
            }
        })
        return (
            <div className={'ql-select-input'}>{text}</div>
        )
    }

    render () {
        return (
            <div tabIndex={0} onBlur={() => {
                this.setState({
                    visiable: false
                })
            }} className={'ql-select'} onClick={this.handleClick}>
                {this.renderPopper()}
                {this.renderSelecter()}
            </div>
        )
    }
}