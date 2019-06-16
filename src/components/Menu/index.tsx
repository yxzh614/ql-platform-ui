import * as React from 'react'
import classnames from 'classnames'
import './menu.less'

export interface MenuProps {
  type: string,
  datasource: Array<IMenuItem>
}

export interface IMenuItem {
  label: string
  key: string
  handler: React.MouseEventHandler
  children: IMenuItem[]
  hide?: boolean
}

export interface MenuState {
  type: string
  datasource: Array<IMenuItem>
  selected?: string
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

  handleItemClick (e: React.MouseEvent, item: IMenuItem, key: number) {
    item.handler && item.handler(e)
    item.hide = !item.hide
    this.setState({key: item.key})
  }


  renderMenuItems = (datasource: Array<IMenuItem>) => {
    return datasource.map((item: IMenuItem, key: number) => {
      return (
        <div key={key}>
          <div className="menu-label" onClick={(e) => {this.handleItemClick(e, item, key)}}>{item.label}</div>
          <div className={
            classnames('sub-menu', this.state.selected === item.key ? 'selected' : '')}>
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