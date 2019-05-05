import React from 'react';
import ReactDOM from 'react-dom'
import InputDemo from './Input/index'
import ProgressDemo from './Progress/index'
import ButtonDemo from './Button/index'
import IconDemo from './Icon/index'
import Menu from '../src/components/Menu/index.tsx'
import Button from '../src/components/Button/index.tsx'
import CheckBox from '../src/components/CheckBox/CheckBox'
import './demo.less'

const x = document.createElement('div')
document.body.appendChild(x)

const MenuDatasource = [
  {
    label: 'Progress',
    handler: () => {window.location = '#ql-progress'}
  }
]

const inner = (
  <div className="ql-demo">
    <div className="demo-side">
      <Menu datasource={MenuDatasource} />
    </div>
    <div className="demo-main">
      <InputDemo />
      <IconDemo />
      <ButtonDemo />
      <ProgressDemo />
      <CheckBox onChange={(e,value)=>{console.log(e,value)}}>{'checkbox label'}</CheckBox>
    </div>
  </div>
)
ReactDOM.render(
  inner,
  x
)