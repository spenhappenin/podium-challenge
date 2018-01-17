import React from 'react';
import Plays from './Plays';
import { Container, Header } from 'semantic-ui-react';
import axios from 'axios';

class App extends React.Component {
  state = { plays: [] };

  componentDidMount() {
    axios.get('http://shakespeare.podium.co/api/reviews', { headers: { 'Authorization': 'koOheljmQX' } } )
      .then( res => {
        this.setState({ plays: res.data.data });
      })
      .catch( res => {
        console.log(res);
      })
  }

  render() {
    return (
      <Container>
        <Header as='h1'>Podium Code Challenge</Header>
        <Plays plays={this.state.plays} />
      </Container>
    );
  }
}

export default App;
