import React, { useEffect, useState } from 'react';
import HomeModule from '../../modules/HomeApi';
import Home from '../../components/Homes';
import  './styles.css';
import { Box } from '@mui/material';



export const Homes = () => {
 

  let [homes, setHomes] = useState([]);

  useEffect(() => {
    HomeModule.getHomes((response) => {
      if (response.status === 'success') {
        setHomes(response.data);
      }
    });

  }, []);

  return (
   <Box className='home-box'><>


      <div className='home-body'>
        {homes.map( home => (
        
          
             
              <Home key={home.id} id={home.id} home={home} />
                          
             
        
          )
        )} 
        </div>
        
      


    </>
    </Box> 
  );
};

export default Homes;