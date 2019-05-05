import React from 'react';
import ReactDOM from 'react-dom'
import InputDemo from './Input/index'
import ProgressDemo from './Progress/index'
import ButtonDemo from './Button/index'
import IconDemo from './Icon/index'
import Button from '../src/components/Button/Button.tsx'
import CheckBox from '../src/components/CheckBox/CheckBox'

import './demo.less'

const x = document.createElement('div')
document.body.appendChild(x)
const inner = (
  <div>
    <div className="demo-block">
      <div className="demo-input-type">
        <InputDemo />
        <IconDemo />
      </div>
      <ButtonDemo />
    </div>
    <div className="demo-block">
    <ProgressDemo />
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