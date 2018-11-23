import React from 'react';
import {
    Container,
    Row,
    Col,
    Form,
} from 'react-bootstrap';

const PaypalSuccessComponent = ({

}) => {

    return (
        <Container>

            <Row>
                <Col style={{ marginTop: "200px" }}>
                    <Form>
                        <Form.Group as={Row}>
                            <div className="container theme-background-white main-body">
                                <div className="col-md-12">

                                    <div className="col-md-12 theme-blue">
                                        <h2>Thank you for your donation ! </h2>
                                    </div>

                                </div>
                            </div>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default PaypalSuccessComponent;