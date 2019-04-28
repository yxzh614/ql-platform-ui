import React from 'react';
import ReactDOM from 'react-dom'
import Input from '../src/components/Input/Input'
import Button from '../src/components/Button/Button.tsx'
import CheckBox from '../src/components/CheckBox/CheckBox'

import './demo.less'

const x = document.createElement('div')
document.body.appendChild(x)
const inner = (
  <div>
    <div className="demo-block">
      <div className="demo-input-type">
        输入框：<Input type="textarea" />
      </div>
    </div>
    <div className="demo-block">
      <div className="demo-button-type">
        按钮主题：
        <Button onClick={(e)=>{console.log('你点击了按钮', e)}}></Button>
        <Button type="primary" onClick={(e)=>{console.log('你点击了按钮', e)}}></Button>
      </div>
      <div className="demo-button-size">
        按钮大小：
        <Button size="m" onClick={(e)=>{console.log('你点击了按钮', e)}}></Button>
        <Button size="s" type="primary" onClick={(e)=>{console.log('你点击了按钮', e)}}></Button>
      </div>
    </div>
    <div className="demo-block">
    进度条：<Button onClick={(e)=>{console.log(e)}}></Button>
    </div>
    <div>
    <CheckBox onChange={(e,value)=>{console.log(e,value)}}>{'checkbox label'}</CheckBox>
    </div>
  </div>
)
ReactDOM.render(
  inner,
  x
)