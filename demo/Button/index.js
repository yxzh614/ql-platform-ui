import React from 'react';
import ReactDOM from 'react-dom'
import Button from '../../src/components/Button/index.tsx'

export default class extends React.Component {
    render () {
        return (
            <div className="demo-block">
            <h2>按钮(Button)</h2>
              <div className="demo-button-type">
                按钮主题：
                <Button onClick={(e)=>{console.log('你点击了按钮', e)}}></Button>
                <Button type="primary" onClick={(e)=>{console.log('你点击了按钮', e)}}></Button>
              </div>
              <div className="demo-button-size">
                按钮大小：
                <Button size="m" onClick={(e)=>{console.log('你点击了按钮', e)}}></Button>
                <Button size="s" type="primary" onClick={(e)=>{console.log('你点击了按钮', e)}}></Button>
                <Button className={'round'} size="s" type="primary" onClick={(e)=>{console.log('你点击了按钮', e)}}></Button>
              </div>
            </div>
        )
    }
}