import React from 'react';
import ReviewDescription from './ReviewDescription';
import PropTypes from 'prop-types';
import { Button, Card } from 'semantic-ui-react';

class Review extends React.Component {
  state = { show: false };

  toggleShow = () => this.setState({ show: !this.state.show });

  render() {
    const { show } = this.state;
    const { review: { author, id, rating, publish_date } } = this.props;
    return(
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
          <Card.Content extra>
            <Button basic color='blue' onClick={this.toggleShow}>
              { show ? 'Close Details' : 'Show Details' }
            </Button>
            { show && <ReviewDescription reviewId={id} /> }
          </Card.Content>
        </Card.Content>
      </Card>
    )
  }
}

Review.propTypes = {
  review: PropTypes.object,
}

export default Review;