
import React from 'react'
import Breadcrumb from '../index'
import renderer from 'react-test-renderer'
const datasource = [{
    label: '主页',
    key: 'r1'
}, {
    label: '个人信息',
    key: 'r2'
}, {
    label: '修改密码',
    key: 'r3'
}]

test('Breadcrumb', () => {
    const component = renderer.create(
        <Breadcrumb datasource={datasource} onClick={(e, key) => {console.log(key)}}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });