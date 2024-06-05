import   * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Box, Button, Container, CssBaseline, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import IceSkatingIcon from '@mui/icons-material/IceSkating';



export default function Shoes(props) {
  

return (
   
  <React.Fragment>
  <CssBaseline />
  <Grid item={true} >
     <Container >
        <Box mb={5}>
    <Card sx={{  aspectRatio:'2/3 ',
    borderRadius: 4,
    
    maxWidth: 345 ,
    boxShadow:'3px 3px 7px 9px '}}>
     <div key={props.shoe.id}>
      <CardHeader
      sx={{height:'13px'}}
        avatar={
          <Avatar sx={{ bgcolor: 'inherit' }} aria-label="recipe">
          <IceSkatingIcon/>
          </Avatar>
        }
        
        title={props.shoe.shoesName.substring(0,10)}
       
      />
    
      <CardMedia 
        component="img"
        height="114"
        image={props.shoe.logo}
        alt="product img"
      />
      
     
    
      <CardActions >
        <Link to={`/Shoes/${props.shoe.id}`}>
          <Button 
          sx={{height:'26px',width:'100%'}} variant="outlined" 
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