import React from 'react';
import ReactDOM from 'react-dom'
import { Upload } from '../../src'


export default class extends React.Component {

    state = {
        value: '22',
        files: null
    }

    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-upload">上传(Upload)</h2>
                    <div className="demo-info">
                      可在表单中使用的文件上传组件
                    </div>
                <h3>拖拽上传</h3>
                    <div className="demo-info">
                      将文件拖拽至此处进行上传
                    </div>
                <Upload files={this.state.files} onChange={(e, files) => {this.setState({files: files})}} dragable={true} />
                <h3>点击上传</h3>
                    <div className="demo-info">
                      点击按钮进行上传
                    </div>
                <Upload files={this.state.files} onChange={(e, files) => {this.setState({files: files})}} />
            </div>
        )
    }
}