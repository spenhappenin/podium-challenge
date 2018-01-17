import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const Review = ({ review: {author, rating, publish_date} }) => (
  <Card>
    <Card.Content>
      <Card.Header>
        { author }
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Rating: { rating }
        </span>
      </Card.Meta>
      <Card.Description>
        { publish_date }
      </Card.Description>
    </Card.Content>
  </Card>
)

Review.propTypes = {
  review: PropTypes.object,
}

export default Review;