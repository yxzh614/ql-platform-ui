import React from 'react';
import ReactDOM from 'react-dom'
import { Button, Modal } from '../../src'


export default class extends React.Component {

    state = {
        visable: false
    }

    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-modal">模态框(modal)</h2>
                    <div className="demo-info">
                      弹出一个模态框展示内容
                    </div>
                <Button text={'显示'} onClick={(e) => {this.setState({visable: true})}}></Button>
                <Modal header={'标题'} visable={this.state.visable} onClose={() => {this.setState({visable: false})}}>
                    <div>这里是Modal</div>
                </Modal>
            </div>
        )
    }
}