import React from 'react';
import { Card } from 'semantic-ui-react';

const Play = ({ play: {author, rating, publish_date} }) => (
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

export default Play;