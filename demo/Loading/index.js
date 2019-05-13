import React from 'react'
import { Loading } from '../../src'

export default class extends React.Component {
    state = {
        visable: true
    }

    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-loading">加载(Loading)</h2>
                    <div className="demo-info">
                        展示加载遮罩
                    </div>
                <Loading visable={this.state.visable}>
                    <div>asdasdsufdghuadsghfikasjfghdaikufgshd</div>
                    <div>asdasdsufdghuadsghfikasjfghdaikufgshd</div>
                    <div>asdasdsufdghuadsghfikasjfghdaikufgshd</div>
                    <div>asdasdsufdghuadsghfikasjfghdaikufgshd</div>
                </Loading>
            </div>
        )
    }
}