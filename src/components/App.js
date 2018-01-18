import React from 'react';
import Reviews from './Reviews';
import axios from 'axios';
import { Container, Header } from 'semantic-ui-react';

class App extends React.Component {
  state = { reviews: [] };

  componentDidMount() {
    axios.get('http://shakespeare.podium.co/api/reviews', { headers: { 'Authorization': process.env.REACT_APP_API_KEY } } )
      .then( res => {
        this.setState({ reviews: res.data.data });
      })
      .catch( res => {
        console.log(res);
      })
  }

  render() {
    return (
      <Container>
        <Header as='h1'>Podium Code Challenge</Header>
        <Reviews reviews={this.state.reviews} />
      </Container>
    );
  }
}

export default App;