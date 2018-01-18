import React from 'react';
import ReviewDescription from './ReviewDescription';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { Button, Card } from 'semantic-ui-react';

class Review extends React.Component {
  state = { show: false };

  showDetails = (reviewId) => {
    // const { show } = this.state;
    // if(show) {
    //   axios.get(`http://shakespeare.podium.co/api/reviews/${reviewId}`, { headers: { 'Authorization': 'koOheljmQX' } })
    //     .then( res => {
    //       console.log(res)
    //     })
    //     .catch( res => {
    //       console.log(res)
    //     })
    // }
    return <p>Working!</p>
  }

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
            <Button basic onClick={this.toggleShow}>
              { show ? 'Close Details' : 'Show Details' }
            </Button>
            {/* { show ? () => this.showDetails(id) : null } */}
            { show ? <ReviewDescription reviewId={id} /> : null }
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