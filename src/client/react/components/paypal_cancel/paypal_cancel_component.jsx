import React from 'react';
import {
    Container,
    Row,
    Col,
    Form,
} from 'react-bootstrap';

const PaypalCancelComponent = ({

}) => {

    return (

        <Container>

            <Row>
                <Col style={{ marginTop: "200px" }}>
                    <Form >
                        <Form.Group as={Row}>
                            <div className="container theme-background-white main-body">
                                <div className="col-md-12">
                                    <h2>There was an error processing your payment</h2>
                                </div>
                            </div>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default PaypalCancelComponent;