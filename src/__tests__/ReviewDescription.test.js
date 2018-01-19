import React from 'react';
import ReviewDescription from '../components/ReviewDescription';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mount } from 'enzyme';

test('should return data from response', () => {
  const component = mount(<ReviewDescription reviewId={'1'}/>)
  expect(component).toBeDefined();
  let mock = new MockAdapter(axios);
  const data = { response: true };
  const reviewId = component.props().reviewId;
  mock.onGet(`http://shakespeare.podium.co/api/reviews/${reviewId}`, { headers: { 'Authorization': process.env.REACT_APP_API_KEY } }).reply(200, {
    data: {
      reviews: [{ author: "Fay Lemke" }]
    }
  })
})

test('should set review state on componentDidMount', () => {
  const component = mount(<ReviewDescription reviewId={'1'} />);
  expect(component.state()).toEqual({ description: '' });
  expect(component.setState({ description: "For ever and a day." }));
  expect(component.state()).toEqual({ description: "For ever and a day." });
});