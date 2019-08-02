import React from 'react'
import classnames from 'classnames'
import { FunctionComponent } from 'react'

export interface BreadcrumbItemProps {
    onClick?: (e: React.MouseEvent, value: string) => void
    classNames?: string
}
const BreadcrumbItem:FunctionComponent<BreadcrumbItemProps> = ({ children, onClick, classNames, ...others }) => {
    const handleClick:React.MouseEventHandler = (e) => {
        onClick && onClick(e, '123')
    }
    return (
        <span className={classnames('breadcrumb-label', classNames)} onClick={handleClick} {...others}>{children}</span>
    )
}
export default BreadcrumbItem