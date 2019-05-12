import React from 'react';
import './popper.less'
import classnames from 'classnames'

export interface PopperProps {
    children: React.ReactElement,
    popper: React.ReactElement
    arrow?: boolean
    position?: string
    trigger?: string
}

export default class extends React.Component<PopperProps> {

    state = {
        visiable: false
    }

    constructor (props: PopperProps) {
        super(props)
    }

    componentDidMount () {
    }

    renderArrow () {
        const { arrow } = this.props;
        if (arrow) {
            return (<div className="ql-popper-arrow"></div>)
        }
        return null
    }

    handleClick = () => {
        const {trigger = 'click'} = this.props
        if (trigger === 'click') {
            this.setState({
                visiable: !this.state.visiable
            })
        }
    }

    handleMouseEnter = () => {
        const {trigger = 'click'} = this.props
        if (trigger === 'hover') {
            this.setState({
                visiable: true
            })
        }
    }

    handleMouseLeave = () => {
        const {trigger = 'click'} = this.props
        if (trigger === 'hover') {
            this.setState({
                visiable: false
            })
        }
    }

    renderPopper () {
        const { popper, position = 'left' } = this.props
        const { visiable } = this.state
        if (!visiable) {
            return null
        }
        return (
            <div className={classnames('ql-popper-popout', position)}>
                <div className={classnames("ql-popper-popper")}>
                    <div className={'ql-popper-container'}>
                        {popper}
                    </div>
                    {this.renderArrow()}
                </div>
            </div>)
    }

    render () {
        const { children } = this.props
        return (
            <div className={'ql-popper'} onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                {this.renderPopper()}
                {children}
            </div>
        )
    }
}