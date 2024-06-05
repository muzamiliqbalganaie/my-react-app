import React from 'react';
import "./styles.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const navigate = useNavigate();

// Example: Navigating to the home page
   //navigate('/');

    const [{basket},dispatch] = useStateValue();
  return (
      
    <div className='subtotal'>
     <CurrencyFormat 
      renderText={(value) => (
        <>
          <p>
            {/*PartO fhome work*/}
            Subtotal ({basket.length} items): <strong>{value}</strong>
          </p>
          <small className='subtotal__gift'>
            <input type='checkbox' /> This order contain a gift  
          </small>
        </>
        
     )}

      decimalScale={2}
      value={getBasketTotal(basket)}  
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
    <div>
      <button onClick={e => navigate('/Payment')}>Procced to checkout</button>
   </div>
   
  </div>
    

  );
}

export default Subtotal;