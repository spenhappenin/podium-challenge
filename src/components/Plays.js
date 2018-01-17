import React from 'react';
import Play from './Play';
import { Grid, Segment } from 'semantic-ui-react';

const Plays = (props) => (
  <Grid>
    <Grid.Row>
        { props.plays.map( (play, id) => {
          return(
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <Play key={id} play={play} />
              </Grid.Column>
            )
          }) 
        }
    </Grid.Row>
  </Grid> 
);

export default Plays;