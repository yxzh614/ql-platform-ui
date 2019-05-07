import React from 'react'
import './Breadcrumb.less'
import classnames from 'classnames'
export interface BreadcrumbItem {
    label: string
    key: string
}

export interface BreadcrumbProps {
    datasource: Array<BreadcrumbItem>
    onClick: (e: React.MouseEvent, key: string) => void
    seperator?: string
}

export default class extends React.Component<BreadcrumbProps> {

    handleClick = (e: React.MouseEvent, key: string) => {
        this.props.onClick && this.props.onClick(e, key)
    }

    renderBreadcrumbItems () {

        const { datasource, seperator = '/' } = this.props

        if (datasource && datasource.length > 0) {
            return datasource.map((item, key) => {
                return (
                <div className={'breadcrumb-item'} key={key}>
                    <span className={classnames(
                        'breadcrumb-seperator',
                        key === 0 ? 'breadcrumb-seperator-hide' : ''
                        )}>{seperator}</span>
                    <span className="breadcrumb-label" onClick={(e) => {this.handleClick(e, item.key)}}>{item.label}</span>
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