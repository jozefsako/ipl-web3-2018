import React from "react";
import {CardElement, injectStripe} from 'react-stripe-elements';
import { 
    Container, 
    Row, 
    Col, 
    Form,
     Image,
    Button, 
} from 'react-bootstrap';
const StripeComponent = ({
    donate,
    amount,
    onFieldChange

}) => {
    //const amount = 10;  //exemple 10euros
    return (
        <Container>
             
        <Row>
        
          <Col xs={{span: 12, offset: 2}} style={{marginTop: "200px"}}>
          <Form onSubmit={(e)=>donate(e,amount)}>
            <h2>Would you like to donate?</h2>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={3}>
                Amount
                </Form.Label>
                <Col sm={13}>
                <Form.Control name="amount" type="number" placeholder="Cents" value={amount} onChange={onFieldChange}/>
                </Col>
            </Form.Group>
            <div className="checkout">
                
                <CardElement />
                {/* <button onClick={()=>donate(amount)}>Send</button> */}
           </div>
            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }} style={{padding: "10%"}}>
                <Button type="submit">Donate</Button>
                </Col>
            </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
       


    )
}

export default StripeComponent;
