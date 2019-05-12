import React from 'react';
import ReactDOM from 'react-dom'
import Button from '../../src/components/Button/index.tsx'

export default class extends React.Component {
    handleClick = (e) => {
      console.log('你点击了按钮', e)
    }
    render () {
        return (
            <div className="demo-block">
            <h2 id="ql-button">按钮(Button)</h2>
              <div className="demo-button-type">
                <h3>按钮主题</h3>
                    <div className="demo-info">
                        可以设置按钮的不同颜色主题
                    </div>
                <Button onClick={this.handleClick} text={'default'}></Button>
                <Button type="primary" onClick={this.handleClick} text={'primary'}></Button>
                <Button type="warning" onClick={this.handleClick} text={'warning'}></Button>
                <Button type="error" onClick={this.handleClick} text={'error'}></Button>
                <Button type="success" onClick={this.handleClick} text={'success'}></Button>
              </div>
              <div className="demo-button-size">
                <h3>按钮大小</h3>
                    <div className="demo-info">
                      可以设置按钮的不同大小
                    </div>
                <Button size="s" type="primary" onClick={this.handleClick}></Button>
                <Button size="m" type="primary" onClick={this.handleClick}></Button>
                <Button size="l" type="primary" onClick={this.handleClick}></Button>
              </div>
              <div className="demo-button-size">
                <h3>按钮形状</h3>
                    <div className="demo-info">
                      可以设置按钮的边框是否为圆形
                    </div>
              <Button className={'round'} size="s" type="primary" onClick={this.handleClick}></Button>
              <Button className={'round'} size="m" type="primary" onClick={this.handleClick}></Button>
              <Button className={'round'} size="l" type="primary" onClick={this.handleClick}></Button>
              </div>
            </div>
        )
    }
}