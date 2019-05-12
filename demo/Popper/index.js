import React from 'react';
import ReactDOM from 'react-dom'
import Popper from '../../src/components/Popper/index.tsx'
import Button from '../../src/components/Button/index.tsx'

function getPopper () {
    return (
        <div>Popper</div>
    )
}

export default class extends React.Component {
    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-button">浮层(Popper)</h2>
            <Popper position={'left'} arrow popper={getPopper()}><Button type="primary" text={'left popper'} /></Popper>
            <Popper position={'top'} arrow popper={getPopper()}><Button type="primary" text={'top popper'} /></Popper>
            <Popper position={'bottom'} arrow popper={getPopper()}><Button type="primary" text={'bottom popper'} /></Popper>
            <Popper trigger='click' position={'right'} arrow popper={getPopper()}><Button type="primary" text={'right popper'} /></Popper>
            </div>
        )
    }
}