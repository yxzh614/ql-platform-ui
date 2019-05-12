import React from 'react'
import classnames from 'classnames'
import Button from '../Button'
import './main.less'
export interface ModalProps {
    visable: boolean,
    onClose: () => void,
    header: string
}

export default class extends React.Component<ModalProps> {



    render () {
        const { visable, children, onClose, header } = this.props
        return (
            <div className={
                classnames('ql-modal',
                    visable ? '' : 'invisable'
                )
            }>
                <div className="ql-modal-container">
                    <div className="ql-modal-header">{header}</div>
                    <div className="ql-modal-inner">{children}</div>
                    <div className="ql-modal-footer">
                        <Button type="primary" onClick={() => {onClose()}} text={'确定'}></Button>
                    </div>
                </div>
            </div>
        )
    }
}