import React from 'react';
import Review from '../components/Review';
import { mount } from 'enzyme';

test('should toggle show state when button is clicked', () => {
  const review = { rating: 3.2, id: '9793364045824', publish_date: "2016-09-04T23:25:47.642388Z", author: "Fay Lemke" };
  const component = mount(<Review review={review} />);
  const show = component.state('show');
  const button = component.find('button').at(0);

  button.simulate('click');
  expect(component.state()).toEqual({ show: !show });
});