// CartItem.js

import   * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia'; 
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import  { Box, Button, Container, CssBaseline, Grid } from '@mui/material';
import { useStateValue } from '../../StateProvider';




function MyCartItem  ({id, image,name,price  })  {
  const [{ basket},dispatch] = useStateValue();

  const removeFromBasket = () => {
       //remove the item from basket
       dispatch({
           type: 'REMOVE_FROM_BASKET',
           id: id,
           
       })
  }
  return (
    <React.Fragment>
    <CssBaseline />
    <Grid item xs={6} md={8}>
       <Container  >
    
           
        <Box mb={1}>
        
    <Card  
     
      raised sx={{ maxWidth: 280, margin: '0 auto', padding: '0.1em', 
        
    }}>
     <div  >
      <CardMedia
        sx={{ padding: '1em 1em 0 1em', objectFit: 'contain'}}
        component="img"
        height="154"
        // width="100%"
        image={image}
        alt="product img"
      />
      <CardHeader 
      sx={{height:'13px',width:'100%',}}   
        title=<Typography>{name}</Typography>
       
      />      
      <CardContent>
        <Typography   variant="subtitle2" color="text.secondary">
         Price = ${price}
        </Typography>
      </CardContent>
    
      <CardActions >
        
        
          <Button 
          sx={{height:'26px',width:'100%'}}
             variant="outlined" 
             color='primary'
             type="button" 
             onClick={removeFromBasket}
            
             >
            Remove from Cart
          </Button>
       
  
      </CardActions>
     </div>
    </Card>
    </Box>
    
    </Container>
  </Grid>
  </React.Fragment>
    
    
    // <div className="MyCartProduct">
    //    <img className='MyCartProduct__image' src={image}
    //    />
    //   <div className='MyCartProduct__info'>
    //      <p className='MyCartProduct__title'>{name}</p>
    //      <p className='MyCartProduct__price'>
    //           <small>$</small>
    //           <strong>{price}</strong>
    //      </p>
    //   </div>
    //   <button>Remove From Cart </button>
    // </div>
  );
};

export default MyCartItem;
