import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Card, Container } from '@mui/material';
import  './styles.css';
import {clothesProducts } from '../../allProductDetail/clothes.js';
import { useStateValue } from '../../StateProvider.js';
import Grid from '@mui/material/Unstable_Grid2';

const ClothesDetail = () => { 
  let {clothId} = useParams();
  console.log(clothId , "abs");
  const clothesProduct = clothesProducts.find((p) => p.id == clothId);
  
 const {
  clothesName,
  clothesDescription,
  logo,
  price
   } = clothesProduct;   

 
  
 

 
 
 
 
 

  const [{ basket },dispatch] = useStateValue();
   


  const addToBasket =()=>{
     //dispatch the item into the data layer
     dispatch({
         type:'ADD_TO_BASKET',
         item: {
             id:clothId,
             name:clothesName,
             image:logo,
             price:price,
         }
     })
  }

  return (

   
    <Box sx={{ flexGrow: 1 }} className='clothesdetail-body'>
    <Grid container spacing={0} m={"20px"}>
       <Grid xs={12}>
            <img src={logo} alt="cloth image " width='294' height='194' >
            </img>
        </Grid>
     <Grid xs={12}>
            <h3>Price:${price}</h3>
     </Grid>
     <Grid xs={12}>
             <h1>Name:{clothesName}</h1>
     </Grid>
     <Grid xs={12}>
              <h2> Details:{clothesDescription}</h2>
     </Grid>
      
 

     <Grid xs={12}>
          <Button variant="outlined" color='primary' type="button" onClick={addToBasket}>
                     Add To Cart
          </Button>
     </Grid>
   </Grid>
 </Box>

  
    )
}

export default ClothesDetail;