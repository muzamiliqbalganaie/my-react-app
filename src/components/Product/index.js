import   * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, Button, Container, CssBaseline, Grid } from '@mui/material';
import { Link } from 'react-router-dom';




export default function Product(props) {
  



  return (
<React.Fragment>
<CssBaseline />
<Grid item xs={6} md={8} >
   <Container >
      <Box >
      
         <Card  
          raised sx={{ maxWidth: 280, margin: '0 auto', padding: '0.1em', width:'250px',mb:'50px',
        
        }}>
            <div key={props.product.id}>
               <CardHeader
                 avatar={
                   <Avatar sx={{ fontSize:'small', bgcolor: 'inherit' }} aria-label="recipe">
                     PROD
                   </Avatar>
                 }
         
                 title={props.product.title.substring(0,30)}
        //          subheader={new Date().toISOString().substring(0,10)}
         />
           <CardMedia
           sx={{ padding: '1em 1em 0 1em', objectFit: 'cover' }}
             component="img"
             height="250"
             image={`https://source.unsplash.com/random/600×600?Clothes,Footware,bags,caps${props.product.id}`}
             alt="Home product img"
        />
           <CardActions disableSpacing>
               <Link to={`/Product/${props.product.id}`}>
               <Button 
               sx={{height:'26px',width:'100%'}} 
                variant="outlined"
                 color='primary'
                  type="button"
                   href="">

              view 
            </Button>
             </Link>
             
            </CardActions>
         </div>
      </Card>
     
    </Box>
  </Container>


</Grid> 
</React.Fragment>
  );
}