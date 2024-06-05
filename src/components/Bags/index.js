import   * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { Box, Button, Container, CssBaseline, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import BackpackIcon from '@mui/icons-material/Backpack';


export default function Bags(props) {
  

  return (
    <React.Fragment>
    <CssBaseline />
    <Grid item={true} >
       <Container >
          <Box mb={5} >
    <Card  sx={{  aspectRatio:'2/3 ',
    borderRadius: 4,
    
    maxWidth: 345 ,
    boxShadow:'3px 3px 7px 9px '}}>
    <div key={props.bag.id}>
      <CardHeader sx={{height:'13px'}}
        avatar={
          
          <Avatar sx={{ bgcolor: 'inherit' }} aria-label="recipe">
          <BackpackIcon/>
          </Avatar>
        }
        
        title={props.bag.bagName.substring(0,10)}
       
      />
      <CardMedia
        component="img"
        height="95"
        // width="20%"
        image={props.bag.logo}
         //image={`https://source.unsplash.com/random/600x600?Bags,Footware,bags,${props.bag.id}`}
        alt="Bags img"
      />
      
      <CardActions >
      <Link to={`/Bags/${props.bag.id}`}>
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