import React from 'react';
import Play from './Play';
import { Grid } from 'semantic-ui-react';

const displayPlays = plays => (
  plays.map( (play, id) => (
    <Grid.Column key={id} mobile={16} tablet={8} computer={4}>
      <Play play={play} />
    </Grid.Column>
  ))
);

const Plays = ({ plays }) => (
  <Grid>
    <Grid.Row>
      { displayPlays(plays) }
    </Grid.Row>
  </Grid> 
);

export default Plays;