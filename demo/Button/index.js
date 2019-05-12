import React from 'react';
import ReactDOM from 'react-dom'
import Button from '../../src/components/Button/index.tsx'

export default class extends React.Component {
    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-button">按钮(Button)</h2>
              <div className="demo-button-type">
                <h3>按钮主题</h3>
                <Button onClick={(e)=>{console.log('你点击了按钮', e)}}></Button>
                <Button type="primary" onClick={(e)=>{console.log('你点击了按钮', e)}}></Button>
              </div>
              <div className="demo-button-size">
                <h3>按钮大小</h3>
                <Button size="m" type="primary" onClick={(e)=>{console.log('你点击了按钮', e)}}></Button>
                <Button size="s" type="primary" onClick={(e)=>{console.log('你点击了按钮', e)}}></Button>
              </div>
              <div>
                <h3>按钮形状</h3>
                <Button className={'round'} size="s" type="primary" onClick={(e)=>{console.log('你点击了按钮', e)}}></Button>
              </div>
            </div>
        )
    }
}