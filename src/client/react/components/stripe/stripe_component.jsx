import React from 'react';
import {Form, Jumbotron, Button, ButtonToolbar} from 'react-bootstrap';

const StripeComponents = ({
    montant,
  }) => {
    return (
        <Jumbotron>
          <h3>DONATE</h3>
          <Form>
            <Form.Group>
                <Form.Label column sm={2}>
                    Amount
                </Form.Label>
                <Form.Control name="amount" type="number" value={amount} onChange={onFieldChange} placeholder="Amount"/>
            </Form.Group>
            <ButtonToolbar>
                <Button variant="outline-primary" onClick={() => donate(amount)}>
                    Donate
                </Button>
            </ButtonToolbar>
        </Form>
        
        </Jumbotron>
      );
  };
  
  export default MessageComponent;
  