
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react';
import CategoryApi from '../../modules/CategoryApi';
import { Link, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import './styles.css';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';




const drawerWidth = 240;
export const Category=()=>{

  const [categories,setCategories] = useState([]);

  const location = useLocation();
  
useEffect(() => { 
  CategoryApi.getCategory(response =>{
      if (response.status === 'success')
       {
         setCategories(response.data);
      }
  });

},[]);

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
 
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


return(
  <React.Fragment>
  <CssBaseline />
  <Grid item xs={6} md={8}>
  <Container
  component="main" maxWidth="xs "
   >
  <Box sx={{display:'flex'}} >
  
       <Box
    
      menu="true"
      component="nav"
      sx={{  width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
      
    >
     
     
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      
        }}
        opens="true"
      >
        <div>
        <Box sx={{
           dispaly:'flex',
           width:{drawerWidth} ,
           paddingTop:'50px' 
          }}>
    <CssBaseline />
          <Container sx={{
            width:'inhert',
            display:'flex',
            backgroundColor:'inhert',
            
                        
           }}>
           <Box 
           
           role="presentation"
           onClick={handleClick}>
          
         
           <Typography 
           sx={{    }}
            mt={2} 
            color="text.primary" 
            alignContent="center"
            >
            {
               location.pathname.slice(1) 
            }
            </Typography>
           
         </Box>   
         
         </Container>
         </Box>

          
          <Divider />
          <List className='list'>
           {categories.map(category => (
            <Link key={category.id} id={category.id} className='list' color='inhert' underline="hover" to={`${category.categoryName}`}  > 
            <ListItem key={category.id}  >
            
              <ListItemButton>
                <ListItemIcon>
                   <DoubleArrowRoundedIcon/>
                </ListItemIcon>
                <ListItemText  
                primary={category.categoryName} 
                underline="none"/>
                
              </ListItemButton>
            </ListItem></Link>
          ))}
          </List>
          
        </div>
      
      </Drawer>  
    </Box>

    <Box
      component="main"
      sx={{ flexGrow: 0, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
    
    <Toolbar />
    
    </Box>
     
  </Box>
  
  </Container>
  </Grid>
</React.Fragment>
  
    
);  

};


export default Category;