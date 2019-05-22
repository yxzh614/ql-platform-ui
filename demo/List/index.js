import React from 'react';
import ReactDOM from 'react-dom'
import List from '../../src/components/List/index.tsx'

export default class extends React.Component {
    state = {
        dragListData: [
            {
                label: '列表项1',
                value: 'item1'
            },
            {
                label: '列表项2',
                value: 'item2'
            },
            {
                label: '列表项3',
                value: 'item3'
            },
            {
                label: '列表项4',
                value: 'item4'
            },
            {
                label: '列表项5',
                value: 'item5'
            }
        ]
    }

    render () {
        return (
            <div className="demo-block">
                <h2 id="ql-list">列表(List)</h2>
                    <div className="demo-info">
                      多功能列表
                    </div>
                <List draggable={true}
                datasource={this.state.dragListData}
                onClick={(e, value) => {console.log('click', value)}}
                onDrag={(e, newList) => {this.setState({dragListData: newList})}}/>
            </div>
        )
    }
}