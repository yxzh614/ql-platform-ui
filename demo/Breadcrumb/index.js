import React from 'react';
import ReactDOM from 'react-dom'
import Breadcrumb from '../../src/components/Breadcrumb/index.tsx'

export default class extends React.Component {

    state = {
        datasource: [{
            label: '主页',
            key: 'r1'
        }, {
            label: '个人信息',
            key: 'r2'
        }, {
            label: '修改密码',
            key: 'r3'
        }]
    }

    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-breadcrumb">面包屑(Breadcrumb)</h2>
                <div className="demo-info">
                    面包屑导航
                </div>
            <Breadcrumb datasource={this.state.datasource} onClick={(e, key) => {console.log(key)}}/>
            </div>
        )
    }
}