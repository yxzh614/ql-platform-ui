import React from 'react';
import ReactDOM from 'react-dom'

import Input from '../src/components/Input/Input'
import Button from '../src/components/Button/Button'

import './demo.css'

const x = document.createElement('div')
document.body.appendChild(x)
const inner = (
  <div>
    <div className="demo-block">
      输入框：<Input></Input>
    </div>
    <div className="demo-block">
      按钮：<Button onClick={(e)=>{console.log(e)}}></Button>
    </div>
  </div>
)
ReactDOM.render(
  inner,
  x
)