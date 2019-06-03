import * as React from 'react'
import classnames from 'classnames'
import Button from '../button/index.tsx'
import './main.less'

export interface InputProps {
    disabled: boolean
    value: number
    step?: number
    defaultValue: string
    borderStyle: string
    className: string
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export default class extends React.Component<InputProps> {

    static getDerivedStateFromProps(nextPorps: InputProps) {
        if ('value' in nextPorps) {
            return {
                value: nextPorps.value,
            }
        }
        return null
    }

    input: HTMLInputElement

    constructor(props: InputProps) {
        super(props)
        const value = props.value || props.defaultValue
        this.state = { value }
    }

    saveInput = (node: HTMLInputElement) => {
        this.input = node
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.value === '') {
            e.target.value = ''
            this.props.onChange && this.props.onChange(e)
            return
        }
        if (e.target.value === '-') {
            this.props.onChange && this.props.onChange(e)
            return
        }
        if (e.target.value === '0-') {
            e.target.value = '-'
            this.props.onChange && this.props.onChange(e)
            return
        }
        if (!isNaN(Number(e.target.value)) && !this.props.disabled) {
            this.props.onChange && this.props.onChange(e)
            return
        }
    }

    handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, operator: string) => {
        const { onChange, step = 1 } = this.props
        let event = Object.create(e)
        if (onChange) {
            // make a new event object
            event.target = this.input
            event.currentTarget = this.input
            if (operator === '-') {
                this.input.value = (Number(this.input.value) - step).toString()
            } else {
                this.input.value = (Number(this.input.value) + step).toString()
            }
            onChange(event as React.ChangeEvent<HTMLInputElement>)
        }
    }

    render() {
        const {
            className,
            disabled
        } = this.props
        const { value } = this.state

        return (
            <div className='ql-number-warpper'>
                <button className="ql-number-fix prefix" onClick={(e) => { this.handleClick(e, '+') }}>
                    +
      </button>
                <input className={classnames(
                    className,
                    'ql-number',
                    disabled ? 'disabled' : ''
                )}
                    onChange={this.handleChange}
                    value={value}
                    ref={this.saveInput}
                />
                <button className="ql-number-fix suffix" onClick={(e) => { this.handleClick(e, '-') }}>
                    -
        </button>
            </div>
        )
    }
}