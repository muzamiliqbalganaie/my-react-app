import React, { useEffect, useState } from 'react';
import  './styles.css';
import { Box, Container } from '@mui/material';
import { Button} from '@mui/material';
import  './styles.css';
import { useParams } from 'react-router';
import { useStateValue } from '../../StateProvider.js';
import ProductsModule from '../../modules/Products.js';
import Grid from '@mui/material/Unstable_Grid2';


export const ProductDetail = () => {
  
  let [products,setProducts] = useState([
    { id: "", name: "" },
    
  ]);

  useEffect(() => {
     ProductsModule.getProducts((response) => {
      if (response.status ==='success'){
        setProducts(response.data);
        
      };
     });

  },[]);

  const {productId} = useParams();
  console.log(productId , "productId");
  // console.log(products)



    const productIdToFind = productId; // Replace with the desired product ID
    const foundProduct = products.find((p) => p.id == productIdToFind);
    //const {title,id,userId,body} = foundProduct
  //console.log(foundProduct)


   const [{ basket },dispatch] = useStateValue();
   
   

   const addToBasket =()=>{
     //dispatch the item into the data layer
     dispatch({
         type:'ADD_TO_BASKET',
         item: {
              id:foundProduct.id,
              Name:foundProduct.title,
              Price:[0]        
            //  price:price,
         }
     })
  }


  return (
    <div className='productdetail-body'>
    <Container>
    {foundProduct ? (
      <Grid>
        <Grid xs={12}>
           <li>hello   </li>
        </Grid>
        <Grid xs={12}>
            <li>Title : {foundProduct.title}</li>
       </Grid>
       <Grid xs={12}>
              <li>UserId: {foundProduct.userId}</li>
        </Grid>
        <Grid xs={12}>
            <li>ID : {foundProduct.id}</li>
        </Grid>
        <Grid xs={12}>
            <li>Body: {foundProduct.body}</li>
        </Grid>
      
     </Grid>  
         
     ) : (
      <p>Loading....</p>
      
    )}

     <Button 
     variant="outlined" 
     color='primary'
     type="button" 
     herf=""
     onClick={'.'}
    
     >
    Add To Cart 
  </Button>
         
     
 
       </Container>
 </div>
 
       
  );
};

export default ProductDetail;
