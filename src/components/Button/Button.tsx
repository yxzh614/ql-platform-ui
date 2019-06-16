import * as React from 'react'
import './Button.less'
import classnames from 'classnames'

export type ButtonProps = {
    text?: String, // 按钮文字
    disabled?: Boolean, // 是否禁用
    type?: String, // 按钮类型
    size?: String, // 按钮尺寸
    className?: String, // 额外类
    onClick?: React.MouseEventHandler // 点击事件
}

export default class extends React.Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props)
    }

    handleClick: React.MouseEventHandler = (e) => {

        const { onClick } = this.props;

        onClick && onClick(e)
    }

    render() {
        const {
            text,
            className,
            disabled,
            type,
            size,
            ...others
        } = this.props

        return (
            <button
                className={classnames(
                    className,
                    'ql-button',
                    disabled ? 'disabled' : '',
                    type,
                    size
                )}
                onClick={this.handleClick}
                {...others}
            >
                {text || '按钮'}
            </button>
        )
    }
}