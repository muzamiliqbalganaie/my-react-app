import {useEffect, useState} from 'react';
import axios from './axios.js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm'
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';


  function Payment(props) {
    const { stripePromise } = props;
    const [ clientSecret, setClientSecret ] = useState('');
    const  [{ basket,user}, dispatch] = useStateValue();
  
    // const baseUrl = "http://127.0.0.1:5001/fir-and-react-b5018/us-central1/api"; //Your Api base URL
    // const dynamicId = `?total=${getBasketTotal(basket) * 100}`


   
   useEffect(() => {
    
    const baseUrl = "http://127.0.0.1:5001/fir-and-react-b5018/us-central1/api"; //Your Api base URL
    const dynamicId = `?total=${getBasketTotal(basket) * 100}`

    
    //generate the clientSecret
    const getClientSecret = async () => {
        const response = await axios.post(`${baseUrl}/Payment/Create${dynamicId}`
    );
        
        setClientSecret(response.data.clientSecret)
   }
    getClientSecret();
    
      },[basket])

    
      console.log('the secret is >>> ', clientSecret)
    
      const loader ='auto';
    
         
        const appearance = {
        theme: 'stripe',
      };
return (
    <>
      <h1>Payment</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret, appearance,loader}}>
          <CheckoutForm  />
        </Elements>
      )}
    </>
  );
}

export default Payment;
