import React, { useEffect, useState } from 'react';
import Product from '../../components/Product';
import ProductsModule from '../../modules/Products';

import  './styles.css';






export const Products = () => {
  let [products,setProducts] = useState([]);

  useEffect(() => {
     ProductsModule.getProducts((response) => {
      if (response.status ==='success'){
        setProducts(response.data);
        
      };
     });

  },[]);

 
  return (
    <>
   
 
    <div className='products-body'  >
    
    {products.map(product =>  (
        
       <Product key={product.id} id={product.id} product={product} />

     
      )
    )}
     
    </div>
    
   
    </>
  );
};

export default Products;
