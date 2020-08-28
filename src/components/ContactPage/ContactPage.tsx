import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Card } from 'react-bootstrap';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export class ContactPage extends React.Component{
    render(){
        return(
        <Container>
            <Card>
                    <Card.Body>
                        <Card.Title>
                            <FontAwesomeIcon icon={ faPhone}/>Contact details
                        </Card.Title>
                        <Card.Text>
                            Contact details will be show hear...
                        </Card.Text>
                    </Card.Body>
            </Card>
         
      </Container>)
    }
}