
{/*




    // const handleSubmit = async (event) => {
    //     // do all the fancy stripe stuff....
    //     event.preventDefault();
    //     if (!stripe || !elements) {
    //         // Stripe.js has not yet loaded.
    //         // Make sure to disable form submission until Stripe.js has loaded.
    //         return;
    //       }


    //     setIsLoading(true);

    //     // const cardElement = elements?.getElement(PaymentElement);
    //     // const token = clientSecret;

    //     const { error }= await stripe.confirmPayment({
    //         elements,
    //         confirmParams: {

    //             return_url: `${window.location.origin}/Orders`,
                         
    //     },
    //   });

    //   if (error.type === "card_error" || error.type === "validation_error") {
    //     setMessage(error.message);
    //   } else {
    //     setMessage("An unexpected error occured.");
    //   }
  
    //   setIsLoading(false);
    // }
  

 
  //return (
    // <form id="payment-form" onSubmit={handleSubmit}>
    // <LinkAuthenticationElement id="link-authentication-element"
    //   // Access the email value like so:
    //   // onChange={(event) => {
    //   //  setEmail(event.value.email);
    //   // }}
    //   //
    //   // Prefill the email field like so:
    //   // options={{defaultValues: {email: 'foo@bar.com'}}}
    //   />
      




//     <div className='Payment'>
//         <div className='payment_container'>
//             <h1>
//                 MyCartItems (
//                       <Link to="/MyCartItem"> {basket?.length} items 
//                       </Link>
//                     ) 
//             </h1>
//         {/*payemnt adress here*/}
//             <div className='payment_section'>
//                  <div className='payment_title'>
//                      <h3>Delivery Adress</h3>
//                  </div>
//                  <div className='payment-adress'>
//                      <p>{ user?.email }</p>
//                      <p>123 React Lane</p>
//                      <p>Worldwide, Universe</p>
//                      <p></p>
//                  </div>
//             </div>

//             {/* Payment section - Review Items*/}
//             <div className='payment_section'>
//                 <div className='payment_title'>
//                     <h3>Review item and delivery</h3>
//                 </div>
//                 <div className='Payment_items'>
//                     {basket.map(item => (
//                         <MyCartItem  
//                         id={item.id}
//                         name={item.name}
//                         price={item.price}
//                         image={item.image}
//                       /> 
//                     ))}
//                 </div>
//             </div>

//             {/* Payment section -Payment method */}
//             <div className='payment_section'>
//                 <div className='payment_title'>
//                     <h3>Payment Method</h3>
//                 </div>
//                 <div className='payment_details'>
//                     {/* Stripe magic will be here */}

//                     <form onSubmit={handleSubmit}>
//                         <CardElement onChange={handleChange}/>
                  
//                         <div className='payment_priceContainer'>
                        
//                         <CurrencyFormat 
//                         renderText={(value) => (
                          
//                             <h3>
//                               {/*PartO fhome work*/}
//                               Order Total ({basket.length} items): <strong>{value}</strong>
//                             </h3>
                     
//                        )}
//                         decimalScale={2}
//                         value={getBasketTotal(basket)}  
//                         displayType={"text"}
//                         thousandSeparator={true}
//                         prefix={"$"}
//                       />
                       
//                         <button disabled={processing || disabled || succeeded}>
//                         <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
//                         </button>
                         
//                       </div>

//                       {/** Errors */}
//                       {error && <div>{error}  </div>}
                      
//                     </form>
//                 </div>            
//             </div>
//         </div>
//     </div>
//   )
// }

//export default Payment;
//*}