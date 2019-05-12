import React from 'react';
import ReactDOM from 'react-dom'

import InputDemo from './Input'
import ProgressDemo from './Progress'
import ButtonDemo from './Button'
import IconDemo from './Icon'
import PopperDemo from './Popper'
import BreadcrumbDemo from './Breadcrumb'
import CardDemo from './Card'
import CheckboxDemo from './CheckBox'
import RadioDemo from './Radio'
import SelectDemo from './Select'
import StepsDemo from './Steps'
import TimelineDemo from './Timeline'
import NumberDemo from './Number'
import ModalDemo from './Modal'

import Menu from '../src/components/Menu'
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
      <SelectDemo />
      <BreadcrumbDemo />
      <CardDemo />
      <CheckboxDemo />
      <RadioDemo />
      <StepsDemo />
      <TimelineDemo />
      <NumberDemo />
      <ModalDemo />
    </div>
  </div>
)
ReactDOM.render(
  inner,
  x
)