import React from 'react'
import ReactDOM from 'react-dom'

import InputDemo from './Input'
import ProgressDemo from './Progress'
import ButtonDemo from './Button'
import IconDemo from './Icon'
import PopperDemo from './Popper'
import BreadcrumbDemo from './Breadcrumb'
import CardDemo from './Card'
import CheckboxDemo from './Checkbox'
import RadioDemo from './Radio'
import SelectDemo from './Select'
import StepsDemo from './Steps'
import TimelineDemo from './Timeline'
import NumberDemo from './Number'
import ModalDemo from './Modal'
import SwitchDemo from './Switch'
import BadgeDemo from './Badge'
import MessageDemo from './Message'
import AlertDemo from './Alert'
import RangeDemo from './Range'
import LoadingDemo from './Loading'
import ListDemo from './List'

import Menu from '../src/components/Menu'
import './demo.less'

const x = document.createElement('div')
document.body.appendChild(x)

function toPos () {
  window.location = `#ql-${this.label}`
}

const components = [
  'breadcrumb', 'button', 'card', 'checkbox', 'icon',
  'input', 'modal', 'number', 'popper', 'progress',
  'radio',
  'select', 'steps', 'timeline', 'switch', 'badge', 'message', 'alert',
  'range', 'loading', 'list'
]

const MenuDatasource = [
]

components.forEach(item => {
  MenuDatasource.push({
    label: item,
    handler: toPos
  })
})

const inner = (
  <div className="ql-demo">
    <div className="demo-side">
      <Menu type="side" datasource={MenuDatasource} />
    </div>
    <div className="demo-main">
      <div className="demo-title">
        ql-platform-ui是一套基于React实现的组件库
      </div>
      <BreadcrumbDemo />
      <ButtonDemo />
      <CardDemo />
      <CheckboxDemo />
      <IconDemo />
      <InputDemo />
      <ModalDemo />
      <NumberDemo />
      <PopperDemo />
      <ProgressDemo />
      <RadioDemo />
      <SelectDemo />
      <StepsDemo />
      <TimelineDemo />
      <SwitchDemo />
      <BadgeDemo />
      <MessageDemo />
      <AlertDemo />
      <RangeDemo />
      <LoadingDemo />
      <ListDemo />
    </div>
  </div>
)
ReactDOM.render(
  inner,
  x
)