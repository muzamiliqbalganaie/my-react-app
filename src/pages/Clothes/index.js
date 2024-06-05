import React, { useEffect, useState } from 'react';
import ClothesModule from '../../modules/ClothesApi';
import Clothes from '../../components/Clothes';

import  './styles.css';


export const ClothesApi = () => {

  let [cloths, setCloths] = useState([]);

  useEffect(() => {
    ClothesModule.getClothes((response) => {
      if (response.status === 'success') {
        setCloths(response.data);
      }
    });

  }, []);
  
  return (
    <>


      <div className='clothes-body'>
      {cloths.map(cloth =>  (
        
            <Clothes key={cloth.id} id={cloth.id} cloth={cloth} />
            
          
        )
      )}
      </div>


    </>
  );
};

export default ClothesApi;