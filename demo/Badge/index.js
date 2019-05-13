import React from 'react'
import ReactDOM from 'react-dom'
import Badge from '../../src/components/Badge/index.tsx'
import Button from '../../src/components/Button/index.tsx'

export default class extends React.Component {
    state = {
        check: false
    }

    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-badge">徽标(Badge)</h2>
                    <div className="demo-info">
                        容器组件，可以在容器右上角设置提醒文案
                    </div>
                <Badge label={'99+'}>
                    <Button></Button>
                </Badge>
            </div>
        )
    }
}