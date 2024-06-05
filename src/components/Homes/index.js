import   * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import  { Box, Button, Container, CssBaseline, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';

import CheckroomIcon from '@mui/icons-material/Checkroom';

  function Loading() {
    return <h2>Loading..</h2>
  }


export default function Home(props ) {
  

 
  
  
  return (
   /* <Suspense>make a component inwhich loading theme is made*/
    <React.Fragment>
    <CssBaseline />
    <Grid item xs={6} md={8} >
       <Container  >
           <Suspense fallback={<Loading/>}>
           
        <Box mb={5}>
        
    <Card sx={{ 
       aspectRatio:'2/3 ',
       borderRadius: 4,
       maxWidth: 345 ,
       boxShadow:'3px 3px 7px 9px '
    }}>
     <div key={props.home.id} id={props.home.id} >
      <CardHeader sx={{height:'13px'}}
        avatar={
          <Avatar sx={{ bgcolor: 'inherit' }} aria-label="recipe">
            <CheckroomIcon/>
          </Avatar>
        }
        
        title={props.home.homeName.substring(0,10)}
       
      />
      <Link to={`/Home/${props.home.id}`}>
      <CardMedia
        component="img"
        height="114"
        // width="100%"
        image={props.home.logo}
         
        //image={`https://source.unsplash.com/random/600x600?Clothes,Footware,bags,${props.home.id}`}
        alt="product img"
      />
      </Link>
      
    
      <CardActions >
        <Link to={`/Home/${props.home.id}`}>
        
          <Button  
            sx={{height:'26px',width:'100%'}}
             variant="outlined" 
             color='primary'
             type="button" 
             herf=""
            
             >
            view 
          </Button>
        </Link>
        
      </CardActions>
     </div>
    </Card>
    </Box>
    </Suspense>
    </Container>
  </Grid>
  </React.Fragment>


  );
}