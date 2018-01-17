import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';
import { Grid } from 'semantic-ui-react';

const displayReviews = reviews => (
  reviews.map( (review, id) => (
    <Grid.Column key={id} mobile={16} tablet={8} computer={4}>
      <Review review={review} />
    </Grid.Column>
  ))
);

const Reviews = ({ reviews }) => (
  <Grid>
    <Grid.Row>
      { displayReviews(reviews) }
    </Grid.Row>
  </Grid> 
);

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
}

export default Reviews;