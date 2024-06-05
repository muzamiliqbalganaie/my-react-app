import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { Button, Card } from '@mui/material';
import  './styles.css';
import { useParams } from 'react-router';
import { homeProducts } from '../../allProductDetail/home.js';
import { useStateValue } from '../../StateProvider.js';
import Grid from '@mui/material/Unstable_Grid2';


export const ItemDetail = () => {
  let {homeId} = useParams();
  console.log(homeId , "abs");
 
  const homeProduct = homeProducts.find((p) => p.id == homeId);

  const {homeName,homeDescription,logo,homePrice} = homeProduct;

  //const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const [{ basket },dispatch] = useStateValue();
   
  console.log("this is the basket>>>>", basket)

  const addToBasket =()=>{
     //dispatch the item into the data layer
     dispatch({
         type:'ADD_TO_BASKET',
         item: {
             id:homeId,
             name:homeName,
             image:logo,
             price:homePrice,
         }
     })
  }


  return (

    <Box sx={{ flexGrow: 1 }} className='itemdetails-body'>
    <Grid container spacing={0} m={"20px"}>
       <Grid xs={12}>
            <img src={logo} alt="home image " width='294' height='194' >
            </img>
        </Grid>
     <Grid xs={12}>
            <h3>Price:${homePrice}</h3>
     </Grid>
     <Grid xs={12}>
             <h1>Name:{homeName}</h1>
     </Grid>
     <Grid xs={12}>
              <h2> Details:{homeDescription}</h2>
     </Grid>
      
 

     <Grid xs={12}>
          <Button variant="outlined" color='primary' type="button" onClick={addToBasket}>
                     Add To Cart
          </Button>
     </Grid>
   </Grid>
 </Box>

  
       
  );
};

export default ItemDetail;
