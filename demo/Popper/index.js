import React from 'react';
import ReactDOM from 'react-dom'
import { Button, Popper } from '../../src'

function getPopper () {
    return (
        <div>Popper</div>
    )
}

export default class extends React.Component {
    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-popper">浮层(Popper)</h2>
                    <div className="demo-info">
                      使用弹出浮层展示内容，可以设置弹出的方式
                    </div>
            <Popper position={'left'} arrow popper={getPopper()}><Button type="primary" text={'left popper'} /></Popper>
            <Popper position={'top'} arrow popper={getPopper()}><Button type="primary" text={'top popper'} /></Popper>
            <Popper position={'bottom'} arrow popper={getPopper()}><Button type="primary" text={'bottom popper'} /></Popper>
            <Popper trigger='click' position={'right'} arrow popper={getPopper()}><Button type="primary" text={'right popper'} /></Popper>
            </div>
        )
    }
}