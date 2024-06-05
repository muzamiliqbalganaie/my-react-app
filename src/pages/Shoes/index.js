import React, { useEffect, useState } from 'react';
import ShoeModule from '../../modules/ShoesApi';
import Shoes from '../../components/Shoes';
import  './styles.css';
import { Box } from '@mui/material';

export const ShoesApi = () => {

  let [shoes,setShoes] =useState([]);

  useEffect(() => {
    ShoeModule.getShoes((response) => {
      if (response.status === 'success') {
        setShoes(response.data);
      }
    });
  },[]);
  return (
   <>
   <Box className='shoes-body'>
   {shoes.map(shoe => (
  
    
       <Shoes key={shoe.id} id={shoe.id} shoe={shoe} />
      
    )
   )}
   
   </Box>

   </>
  );
};

export default ShoesApi ;