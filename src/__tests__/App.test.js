import React from 'react';
import App from '../components/App';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mount, shallow } from 'enzyme';

test('renders without crashing', () => {
  const component = mount(<App />);
});

test('should return data from response', () => {
  const component = mount(<App />);
  expect(component).toBeDefined();
  let mock = new MockAdapter(axios);
  const data = { response: true };
  mock.onGet('http://shakespeare.podium.co/api/reviews', { headers: { 'Authorization': process.env.REACT_APP_API_KEY } } ).reply(200, {
    data: {
      reviews: [{ author: "Fay Lemke" }]
    }
  })
});

test('should set review state on componentDidMount', () => {
  const review = { rating: 3.2, id: 9793364045824, publish_date: "2016-09-04T23:25:47.642388Z", author: "Fay Lemke" };
  const component = mount(<App />);
  expect(component.state()).toEqual({ reviews: [] });
  expect(component.setState({ reviews: [review] }));
  expect(component.state('reviews').length).toBe(1);
});