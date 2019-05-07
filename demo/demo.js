import React from 'react';
import ReactDOM from 'react-dom'

import InputDemo from './Input'
import ProgressDemo from './Progress'
import ButtonDemo from './Button'
import IconDemo from './Icon'
import PopperDemo from './Popper'
import BreadcrumbDemo from './Breadcrumb'

import Menu from '../src/components/Menu/index.tsx'
import CheckBox from '../src/components/CheckBox/index.tsx'
import './demo.less'

const x = document.createElement('div')
document.body.appendChild(x)

const MenuDatasource = [
  {
    label: 'Progress',
    children: [
      {
        label: 'Progress',
        handler: () => {window.location = '#ql-progress'},
        children: [
          {
            label: 'Progress',
            handler: () => {window.location = '#ql-progress'},
          }
        ]
      }
    ]
  }
]

const inner = (
  <div className="ql-demo">
    <div className="demo-side">
      <Menu type="side" datasource={MenuDatasource} />
    </div>
    <div className="demo-main">
      <InputDemo />
      <IconDemo />
      <ButtonDemo />
      <ProgressDemo />
      <PopperDemo />
      <BreadcrumbDemo />
      <CheckBox refid={'asdasd'} onChange={(e,value)=>{console.log(e,value)}} label="checkbox label"/>
    </div>
  </div>
)
ReactDOM.render(
  inner,
  x
)