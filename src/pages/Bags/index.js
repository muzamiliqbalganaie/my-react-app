import React, { useEffect, useState } from 'react';
import BagsModule from '../../modules/BagsApi';
import Bags from '../../components/Bags';

import  './styles.css';


export const BagsApi = () => {

  let [bags, setBags] = useState([]);

  useEffect(() => {
    BagsModule.getBags((response) => {
      if (response.status === 'success') {
        setBags(response.data);
      }
    });

  }, []);
  return (
    <>


      <div className='bag-body'>
        {bags.map(bag => (
          
          
              <Bags bag={bag} id={bag.id} key={bag.id} />
            
          )
        )}
      </div>


    </>
  );
};

export default BagsApi;