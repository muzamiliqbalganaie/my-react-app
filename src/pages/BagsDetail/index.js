import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import  './styles.css';
import {bagProducts } from '../../allProductDetail/bags.js';
import { useStateValue } from '../../StateProvider.js';
import Grid from '@mui/material/Unstable_Grid2';

const BagsDetail = () => { 
  let {bagId} = useParams();
  
  const bagProduct = bagProducts.find((p) => p.id == bagId);
  console.log(bagId , "abs");
 const { bagName,
  bagDescription,logo,price
 } = bagProduct;   

 
  
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

   const [{basket},dispatch] = useStateValue();
   console.log("THIS IS A BASKET>>>>>,BASKET")

   const addToBasket =()=>{
    //dispatch the item into the data layer
    dispatch({
        type:'ADD_TO_BASKET',
        item: {
            id:bagId,
            name:bagName,
            image:logo,
            price:price,
        }
    })
 }
  return (

   
   <Box sx={{ flexGrow: 1 }} className='bagsdetail'>
       <Grid container spacing={0} m={"20px"}>
          <Grid xs={12}>
               <img src={logo} alt="bag image " width='294' height='194' >
               </img>
           </Grid>
        <Grid xs={12}>
               <h3>Price:${price}</h3>
        </Grid>
        <Grid xs={12}>
                <h1>Name:{bagName}</h1>
        </Grid>
        <Grid xs={12}>
                 <h2> Details:{bagDescription}</h2>
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

export default BagsDetail;