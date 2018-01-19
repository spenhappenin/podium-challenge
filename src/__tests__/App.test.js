import React from 'react';
import App from '../components/App';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('functionality', () => {
  let component;

  beforeEach( () => {
    component = mount(<App />);
  })

  it('renders without crashing', () => {
  });
  
  it('sets reviews state to equal length of 1', () => {
    expect(component.state('reviews').length).toEqual(0);
    expect(component.setState({ reviews: [{ title: 'foo' }] }));
    expect(component.state('reviews').length).toEqual(1);
  })
})
