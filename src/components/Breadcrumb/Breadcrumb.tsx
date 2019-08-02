import React from 'react'
import './Breadcrumb.less'
import classnames from 'classnames'
import Icon from '../Icon'
import BreadcrumbItem from './BreadcrumbItem'
export interface BreadcrumbItem {
    label: string
    key: string
}

export interface BreadcrumbProps {
    datasource: Array<BreadcrumbItem>
    onClick: (e: React.MouseEvent, key: string) => void
    seperator?: string
}

export class Breadcrumb extends React.Component<BreadcrumbProps> {

    handleClick = (e: React.MouseEvent, key: number) => {
        this.props.onClick && this.props.onClick(e, key.toString())
    }

    renderBreadcrumbItems () {

        const { datasource, seperator } = this.props

        if (datasource && datasource.length > 0) {
            return datasource.map((item, key) => {
                return (
                <div className={'breadcrumb-item'} key={key}>
                    <span className={classnames(
                        'breadcrumb-seperator',
                        key === 0 ? 'breadcrumb-seperator-hide' : ''
                        )}>{seperator ? seperator : (<Icon type={'right'}/>)}</span>
                    <BreadcrumbItem onClick={(e) => {this.handleClick(e, key)}}>{item.label}</BreadcrumbItem>
                </div>
                )
            })
        }
        return 
    }

    render () {
        return (
            <div className="ql-breadcrumb">
                {this.renderBreadcrumbItems()}
            </div>
        )
    }
}

export default Breadcrumb