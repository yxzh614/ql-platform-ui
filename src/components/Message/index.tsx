import React from 'react'
import ReactDOM from 'react-dom'
import './main.less'
import classnames from 'classnames'

export function message (text: string | Element, delay: number = 1500) {
    
    const x = document.createElement('div')
    document.body.appendChild(x)
    const inner = (
        <Message delay={delay}>{text}</Message>
    )
    ReactDOM.render(
        inner,
        x
    )
}

export interface MessageProps {
    delay: number
}

class Message extends React.Component<MessageProps> {
    state = {
        hide: false
    }
    componentDidMount () {
        const {delay = 1500} = this.props
        setTimeout(() => {
            this.setState({
                hide: true
            })
        }, delay);
    }

    render () {
        const { children } = this.props
        return (
            <div className={
                classnames(
                    'ql-message',
                    this.state.hide ? 'hide' : '')
            }>
            {children}
            </div>
        )
    }
}

export default Message