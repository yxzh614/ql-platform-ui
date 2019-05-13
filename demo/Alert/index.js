import React from 'react'
import { Alert } from '../../src'

export default class extends React.Component {
    state = {
        check: false
    }

    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-alert">警告(Alert)</h2>
                    <div className="demo-info">
                        在页面内展示一条警告文案
                    </div>
                <Alert title={'错误提示的文案'} closable close={'知道了'}>
                </Alert>
            </div>
        )
    }
}