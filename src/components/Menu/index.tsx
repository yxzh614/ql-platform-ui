import * as React from 'react'
import classnames from 'classnames'
import Icon from '../Icon/index.tsx'

export interface MenuProps {
    datasource: Array<IMenuItem>
}

export interface IMenuItem {
    label: string
    handler: React.MouseEventHandler
    children: IMenuItem[]
}

export default class extends React.Component<MenuProps> {

    renderMenuItems = (datasource: Array<IMenuItem>) => {
        return datasource.map((item: IMenuItem) => {
            return (
                <div onClick={item.handler}>{item.label}
                {
                    item.children ? this.renderMenuItems(item.children) : null
                }
                </div>
            )
        })
    }

    render () {
        const { datasource } = this.props
        return (
            <div>
                {this.renderMenuItems(datasource)}
            </div>
        )
    }
}