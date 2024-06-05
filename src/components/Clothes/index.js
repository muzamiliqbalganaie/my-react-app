import   * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';

import { Box, Button, Container, CssBaseline, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckroomIcon from '@mui/icons-material/Checkroom';


export default function Clothes(props) {


  
  
     

  return (
<React.Fragment >
<CssBaseline />
<Grid  item={true} >
   <Container >
      <Box mb={5}>
    <Card sx={{  aspectRatio:'2/3 ',
    borderRadius: 4,
    
    maxWidth: 345 ,
    boxShadow:'3px 3px 7px 9px ' }}>
    <div key={props.cloth.id}>
      <CardHeader sx={{height:'13px'}}
        avatar={
          <Avatar sx={{ bgcolor: 'inherit' }} aria-label="recipe">
            <CheckroomIcon/>
          </Avatar>
        }
        
        title={props.cloth.clothesName}
       
      />
      <CardMedia
        component="img"
        height="114"
        // width="100%"
        image={props.cloth.logo}
        // image={`https://source.unsplash.com/random/600x600?Clothes,Footware,bags,${props.cloth.id}`}
         alt="clothes img"
      />
   
      <CardActions >
      <Link to={`/Clothes/${props.cloth.id}`}>
        <Button   sx={{height:'26px',width:'100%'}} variant="outlined" color='primary' type="button" href="">
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