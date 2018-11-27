import React from "react";
import TransactionsComponent from "./transactions_component";
import sendApiRequest from "react/utils/api";

class TransactionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { transactions: [] };
  }

  fetchTransactions(){
    sendApiRequest({ url: "/api/transactions" })
      .then((transactions) => {
        this.setState({
          transactions: transactions,
        })
      })
      .catch((error) => {
        console.error(error);
        this.setState({
            transactions: [],
        })
      })
  }

  componentDidMount(){
    this.fetchTransactions()
  }

  render() {
    return (
      <TransactionsComponent
        transactions={this.state.transactions}
      />
    );
  }
}

export default TransactionsContainer;
