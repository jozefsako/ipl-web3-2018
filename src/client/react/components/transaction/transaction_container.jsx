import React from "react";
import TransactionComponent from "./transaction_component";
import sendApiRequest from "react/utils/api";

class TransactionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            transaction: null,
        };
    }

    fetchTransaction() {
        const url = `/api/transactions/${this.state.id}`;
        sendApiRequest({ url })
            .then((transaction) => {
                this.setState({
                    transaction: transaction,
                })
                console.log("transaction ----> ")
                console.log(JSON.stringify(transaction));
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    transaction: [],
                })
            })
    }

    componentDidMount() {
        setTimeout(this.fetchTransaction.bind(this), 2000);
    }

    render() {
        return (
            <TransactionComponent
                transaction={this.state.transaction}
            />
        );
    }
}

export default TransactionContainer;
