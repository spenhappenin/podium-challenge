import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

class ReviewDescription extends React.Component {
  state = { description: '' };

  componentDidMount() {
    const { reviewId } = this.props;
    axios.get(`http://shakespeare.podium.co/api/reviews/${reviewId}`, { headers: { 'Authorization': process.env.REACT_APP_API_KEY } })
      .then( res => {
        this.setState({ description: res.data.data.body });
      })
      .catch(res => {
        console.log(res);
      })
  }

  render() {
    const { description } = this.state;
    if(description)
      return <Header as='h5'>{description}</Header>
    return null
  }
}

ReviewDescription.propTypes = {
  reviewId: PropTypes.string
}

export default ReviewDescription;