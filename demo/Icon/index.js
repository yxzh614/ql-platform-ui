import React from 'react';
import ReactDOM from 'react-dom'
import Input from '../../src/components/Input/index.tsx'
import Icon from '../../src/components/Icon/index.tsx'

export default class extends React.Component {
    state = {
        value: '',
        textarea: '',
        password: ''
    }

    render () {
        return (
            <div className="demo-block">
                <h2>图标(Icon)</h2>
                <Icon type="home" />
            </div>
        )
    }
}