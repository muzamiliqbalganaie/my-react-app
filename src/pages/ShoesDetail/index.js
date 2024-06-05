import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import  './styles.css';
import {shoeProducts } from '../../allProductDetail/shoes.js';
import { useStateValue } from '../../StateProvider.js';
import Grid from '@mui/material/Unstable_Grid2';

const ShoeDetail = () => { 
  let {shoeId} = useParams();
  
  const shoeProduct = shoeProducts.find((p) => p.id == shoeId);
 
 const { shoesName,
  shoesDescription,logo,price
 } = shoeProduct;   

 
  
 

  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };\

  const [{basket},dispatch] = useStateValue();
   console.log("THIS IS ABASKET>>>>>,BASKET")

   const addToBasket =()=>{
    //dispatch the item into the data layer
    dispatch({
        type:'ADD_TO_BASKET',
        item: {
            id:shoeId,
            name:shoesName,
            image:logo,
            price:price,
        }
    })
 }
  return (

    <Box sx={{ flexGrow: 1 }} className='shoesdetail-body'>
    <Grid container spacing={0} m={"20px"}>
       <Grid xs={12}>
            <img src={logo} alt="shoe image " width='294' height='194' >
            </img>
        </Grid>
     <Grid xs={12}>
            <h3>Price:${price}</h3>
     </Grid>
     <Grid xs={12}>
             <h1>Name:{shoesName}</h1>
     </Grid>
     <Grid xs={12}>
              <h2> Details:{shoesDescription}</h2>
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

export default ShoeDetail;