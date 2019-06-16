import React from 'react'
import './main.less'
import classnames from 'classnames'

export interface IListItem {
    label: string
    value: string
}

export interface ListProps {
    draggable?: boolean
    datasource: Array<IListItem>
    onDrag: (e: React.DragEvent, data: Array<IListItem>) => void,
    onClick: (e: React.MouseEvent, target: string) => void
}

interface ListState {
    datasource: Array<IListItem>
    overIndex: number
    position?: string
    originIndex?: number
}

export default class extends React.Component<ListProps, ListState> {

    static getDerivedStateFromProps (nextProps: ListProps) {
        const { datasource } = nextProps
        return {
            datasource
        }
    }

    constructor (props: ListProps) {
        super(props)
        this.state = {
            datasource: [],
            overIndex: -1
        }
    }

    handleClick = (e: React.MouseEvent, key: string) => {
        const { onClick } = this.props
        onClick && onClick(e, key)
    }

    handleDragStart = (e: React.DragEvent<HTMLDivElement>, key: number) => {
        this.setState({originIndex: key})
    }

    handleDragEnter = (e: React.DragEvent<HTMLDivElement>, key: number) => {
        this.setState({overIndex: key})
    }

    handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        const { datasource, onDrag } = this.props

        const {overIndex, originIndex} = this.state

        if (overIndex === -1) {
            return
        }

        const position = overIndex ? 'down' : 'up'
        onDrag && onDrag(e, arraySorter(datasource, originIndex || overIndex, overIndex, position)) // if there is no originIndex, send key in which means making no movement
        this.setState({overIndex: -1})
    }

    handleDragOver = (e: React.DragEvent<HTMLDivElement>, key: number) => {
        e.preventDefault()

        const position = getPosition(e)
        if (this.state.position !== position) {
            this.setState({position: position})
        }
    }

    handleDrop = (e: React.DragEvent<HTMLDivElement>, key: number) => {
        e.preventDefault()

        const { datasource, onDrag } = this.props
        const { originIndex } = this.state  

        const position = getPosition(e)
        onDrag && onDrag(e, arraySorter(datasource, originIndex, key, position)) // if there is no originIndex, send key in which means making no movement
        this.setState({overIndex: -1})
    }

    renderListItems () {
        const { draggable } = this.props
        const { datasource, overIndex, position } = this.state
        return datasource.map((item, key) => {
            return (
                <div
                className={classnames('ql-list-item',
                overIndex === key ? 'active' : '',
                overIndex === key ? position : '')}
                key={key}
                onClick={(e) => {this.handleClick(e, item.value)}}
                onDragStart={(e) => {this.handleDragStart(e, key)}}
                onDragEnter={(e) => {this.handleDragEnter(e, key)}}
                onDragOver={(e) => {this.handleDragOver(e, key)}}
                onDrop={(e) => {this.handleDrop(e, key)}}
                onDragEnd={this.handleDragEnd}
                draggable={draggable}>{item.label}</div>
            )
        })
    }

    render () {
        return (
            <div>
                {this.renderListItems()}
            </div>
        )
    }
}

function arraySorter (datasource: Array<any>, origin: number, target: number, position: string) { // sort by drag
    const res: any[] = []
    if (position === 'up') {
        if (origin < target) {
            return res.concat(datasource.slice(0, origin), datasource.slice(origin + 1, target), datasource[origin], datasource.slice(target))
        }
        if (origin > target) {
            return res.concat(datasource.slice(0, target), datasource[origin], datasource.slice(target, origin), datasource.slice(origin + 1))
        }
    } else if (position === 'down') {
        if (origin < target) {
            return res.concat(datasource.slice(0, origin), datasource.slice(origin + 1, target + 1), datasource[origin], datasource.slice(target + 1))
        }
        if (origin > target) {
            return res.concat(datasource.slice(0, target + 1), datasource[origin], datasource.slice(target + 1, origin), datasource.slice(origin + 1))
        }
    }
    return datasource
}

function getPosition (e: React.MouseEvent) { // get pointer position
    const position = e.nativeEvent.layerY // layerY contains border
    const height = e.nativeEvent.target ? e.nativeEvent.target.offsetHeight : 0;
    if (position > height || position < 0) {
        return 'out'
    }
    if (position < height / 2) {
        return 'up'
    } else {
        return 'down'
    }
}