import React from 'react';
import {Alert} from 'react-bootstrap';

class PaypalThankYouPage extends Component {
    state = {
        confirmed:false,
        paymentId:"",
        PayerID:""

      }
    render() { 
        return (<Alert variant='info'>
        Thanks { confirmed }
      </Alert>  );
    }
}
 
export default PaypalThankYouPage;