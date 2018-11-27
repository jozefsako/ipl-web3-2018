import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, ButtonToolbar, Button } from "react-bootstrap";

const TransactionItem = ({ transaction }) => {
    const detailsPath = `/transaction/${transaction._id}`;

    return (
        <Row>
            <Col xs={8}>{transaction.id}</Col>
            <Col xs={4}>
                <ButtonToolbar>
                    <Button variant="outline-primary">
                        <Link to={detailsPath}>Détails</Link>
                    </Button>
                </ButtonToolbar>
            </Col>
        </Row>
    );
};

export default TransactionItem;
