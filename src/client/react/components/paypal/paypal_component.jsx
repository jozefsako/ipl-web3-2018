import React from 'react';
import {  Form, Jumbotron, Button, ButtonToolbar} from 'react-bootstrap';


const PaypalComponent = ({donate,amount, onFieldChange, url}) => {
    //TODO have to pass the amount onto donate method
    

    return (
        <div>
    <Jumbotron>
        <h2>Donate Money</h2>
        <Form >
            <Form.Group>
                <Form.Label column sm={2}>
                Amout
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
    <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="300"
    height="200"
    
    src={url}>
</iframe>
</div>



    )
}
 
export default PaypalComponent;