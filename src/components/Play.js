import React from 'react';
import { Card } from 'semantic-ui-react';

const Play = (props) => (
  <Card>
    <Card.Content>
      <Card.Header>
        { props.play.author }
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Rating: { props.play.rating }
        </span>
      </Card.Meta>
      <Card.Description>
        { props.play.publish_date }
      </Card.Description>
    </Card.Content>
  </Card>
)

export default Play;