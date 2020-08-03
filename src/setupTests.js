import React from 'react';
import Tabs from './state/Tabs';
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() })

it('renders empty given no tabs', () => {
  const wrapper = shallow(<Tabs />)
  expect(toJson(wrapper)).toMatchSnapshot()
})