import * as React from 'react'
import classnames from 'classnames'
import './menu.less'

export interface MenuProps {
  type: string,
  datasource: Array<IMenuItem>
}

export interface IMenuItem {
  label: string
  handler: React.MouseEventHandler
  children: IMenuItem[]
  hide?: boolean
}

export interface MenuState {
  type: string
  datasource: Array<IMenuItem>
}

export default class extends React.Component<MenuProps> {

  state: MenuState = {
    type: 'side',
    datasource: []
  }

  static getDerivedStateFromProps (nextPorps: MenuProps) {
    if ('datasource' in nextPorps && 'type' in nextPorps) {
      return {
        type: nextPorps.type,
        datasource: nextPorps.datasource.map(item => {
          return item
        }),
      }
    }
    return null
  }

  handleItemClick (e: React.MouseEvent, item: IMenuItem) {
    item.handler && item.handler(e)
    item.hide = !item.hide
    this.setState({})
  }


  renderMenuItems = (datasource: Array<IMenuItem>) => {
    return datasource.map((item: IMenuItem, key: number) => {
      return (
        <div key={key}>
          <div className="menu-label" onClick={(e) => {this.handleItemClick(e, item)}}>{item.label}</div>
          <div className={
            classnames('sub-menu')}>
            <div className={
              classnames(item.hide ? 'hide-children' : '')
            }>
                {
                  item.children ? this.renderMenuItems(item.children) : null
                }
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    const { datasource, type } = this.state
    console.log(datasource)
    return (
      <div className={
        classnames('ql-menu',
        type)
      }>
        {this.renderMenuItems(datasource)}
      </div>
    )
  }
}