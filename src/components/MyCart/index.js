// Cart.js
import { useStateValue } from "../../StateProvider";
import MyCartItem from "../MyCartItem";
import Subtotal from "../Subtotal";
import "./styles.css"; 

function MyCart ()  {
  const  [{ basket,user}, dispatch] = useStateValue();
  
  return (
    <div className="checkout">
   
      <div className="checkout__right">
      <div>
        <h3>Hello,{user?.email}</h3>
         <h2>Your Shopping Cart</h2>
        <Subtotal/>
      </div>
     
          
           
       
      </div>
    
      <div className="checkout__left">
          
           {basket.map(item => (
          <MyCartItem  
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />

         ))} 
         {/*MyCartItem*/}
         {/*MyCartItem*/}
         {/*MyCartItem*/}
         {/*MyCartItem*/}
      </div>
   </div>
  );
};

export default MyCart;
