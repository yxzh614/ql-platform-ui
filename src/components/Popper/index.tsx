import React from 'react';
import Popper from 'popper.js'

export default class extends React.Component<any> {

    componentDidMount () {
        console.log(Popper)
    }

    render () {
        return (
            <div>
                <div>constructing</div>
            </div>
        )
    }
}