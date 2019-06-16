import React from 'react'
import ReactDOM from 'react-dom'
import { Icon } from '../../src'

export default class extends React.Component {
    state = {
        value: '',
        textarea: '',
        password: ''
    }

    render () {
        return (
            <div className="demo-block">
                <h2 id="ql-icon">图标(Icon)</h2>
                    <div className="demo-info">
                      设置一系列不同形态的图标
                    </div>
                <Icon type="close" />
                <Icon type="shop" />
                <Icon type="right" />
                <Icon type="plus" />
                <Icon type="star" />
                <Icon type="warning" />
                <Icon type="lock" />
            </div>
        )
    }
}