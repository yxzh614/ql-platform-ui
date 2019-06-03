import React from 'react';
import ReactDOM from 'react-dom'
import { Timeline } from '../../src'


export default class extends React.Component {

    state = {
        value: '22'
    }

    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-timeline">时间轴(timeline)</h2>
                    <div className="demo-info">
                      纵向排列一系列信息
                    </div>
                <Timeline datasource={[
                    '2018-05-01:国际劳动节',
                    '2018-10-01:国庆节'
                ]} active={0} />    
            </div>
        )
    }
}