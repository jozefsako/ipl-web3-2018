import React from "react";
import { Container, ListGroup } from 'react-bootstrap';
import TransactionItem from './transaction_item';


const TransactionsComponent = ({
    transactions,
}) => {
    return (
        <Container>
            <h3>Transactions</h3>
            <ListGroup>
                {
                    transactions.map((transaction, i) => (
                        <ListGroup.Item key={i} >
                            <TransactionItem transaction={transaction} />
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Container>
    );
};

export default TransactionsComponent;
