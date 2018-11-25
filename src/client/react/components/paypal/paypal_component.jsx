import React from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    Button,
} from 'react-bootstrap';

const PaypalComponent = ({
    pay, amount, 
}) => {

    return (

        <Container>

            <Row>
                <Col style={{ marginTop: "200px" }}>
                    <Form onSubmit={pay}>
                        <Form.Group as={Row}>
                            <div className="container theme-background-white main-body">
                                <div className="col-md-12">

                                    <div className="row donate-bar">

                                        <div className="col-md-4 theme-blue">
                                            GIVE WHERE NEEDED MOST
                                        </div>

                                        <div style={{ marginTop: "auto", marginBottom: "auto" }} className="col-md-8">
                                            <Button className="btn-blue" style={{ marginLeft: "0.5%", marginRight: "0.5%" }} onClick={() => amount = "25"}>$25</Button>
                                            <Button className="btn-blue" style={{ marginLeft: "0.5%", marginRight: "0.5%" }} onClick={() => amount = "50"}>$50</Button>
                                            <Button className="btn-blue" style={{ marginLeft: "0.5%", marginRight: "0.5%" }} onClick={() => amount = "100"}>$100</Button>
                                            <Button className="btn-blue" style={{ marginLeft: "0.5%", marginRight: "0.5%" }} onClick={() => amount = "500"}>$500</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col>
                                <Button onClick={() => pay(amount)} className="btn-blue">Payer</Button>
                            </Col>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default PaypalComponent;