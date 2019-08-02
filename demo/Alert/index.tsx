import React from 'react'
import { Alert } from '../../src'
import {AlertProps} from '../../src/components/Alert'

export default class extends React.Component {
    state = {
        check: false
    }

    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-alert">警告提示(Alert)</h2>
                    <div className="demo-info">
                        在页面内展示一条警告提示文案
                    </div>
                    <div style={{marginBottom: '10px'}}>
                        <Alert type={'primary'} title={'错误提示的文案'}  close={'知道了'} />
                    </div>
                    <div style={{marginBottom: '10px'}}>
                        <Alert type={'error'} title={'错误提示的文案'}  close={'知道了'} />
                    </div>
                    <div className="demo-info">
                        可关闭提示
                    </div>
                    <div style={{marginBottom: '10px'}}>
                        <Alert type={'warning'} title={'错误提示的文案'} closeable close={'知道了'} />
                    </div>
                    <div style={{marginBottom: '10px'}}>
                        <Alert type={'success'} title={'错误提示的文案'} closeable close={'知道了'} />
                    </div>
            </div>
        )
    }
}