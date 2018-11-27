import React from "react";
import { Jumbotron, Table } from 'react-bootstrap';
import { CircleLoader } from "react-spinners";


const TransactionComponent = ({
  transaction,
}) => {
  return (
    <div >

      <Jumbotron>
        <h3>Transactions</h3>
        {!transaction &&
          <CircleLoader
          />
        }
      </Jumbotron>

      {transaction &&
      
        <Table>
          <thead>
            <tr>
              <th scope="col">ID_paypal</th>
              <th scope="col">Methode</th>
              <th scope="col">Payer info email</th>
              <th scope="col">Amount</th>
              <th scope="col">Currency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{transaction.id}</td>
              <td>{transaction.payer.payment_method}</td>
              <td>{transaction.payer.payer_info.email}</td>
              <td>{transaction.transactions[0].amount.total}</td>
              <td>{transaction.transactions[0].amount.currency}</td>
            </tr>
          </tbody>
        </Table>

      }

    </div>
  );
};

export default TransactionComponent;
