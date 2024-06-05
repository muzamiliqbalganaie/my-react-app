import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import CategoryApi from '../../modules/CategoryApi';
import {  Badge, Input, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect } from 'react';
import './styles.css';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import  { useStateValue } from '../../StateProvider';
import { useState } from 'react';
import {auth} from "../../firebaseConfig";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


// const drawerWidth = 240;
export const Header=()=>{

  const [{basket,user},dispatch] = useStateValue();

  const [categories,setCategories] = useState([]);
  
  
  useEffect(() => { 
    CategoryApi.getCategory(response =>{
      if (response.status === 'success') 
      { 
        setCategories(response.data);
      }
  });

  },[]);



  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  const [themeMode, setThemeMode]  = useState('light-theme');

  const toggleTheme = () => {
   
    themeMode==='dark-theme' ? setThemeMode("light-theme") : setThemeMode("dark-theme");   
  
  }

  useEffect(() => {
    document.body.className = themeMode;
 }, [themeMode])
  

  return (
    <header position="sticky">
    <Box sx={{ flexGrow: 1, display:'flex'  }}>
      <AppBar   sx={{zIndex:1400}} >
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            
            sx={{  mr:2, display: { sm: 'none' }
            
           }}
          >
         
          <Drawer 
        
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle} 
          ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          
            
          >
          <div >
          <Toolbar />
          <Divider />
          <List className='list'>
          {categories.map(category => (
             <Link key={category.id} id={category.id} className='list' color='inhert' underline="hover"  to={`${category.categoryName}`}  > 
            <ListItem  >
              <ListItemButton>
                <ListItemIcon>
                     <DoubleArrowRoundedIcon/>
                </ListItemIcon>
                <ListItemText
                primary={
                  category.categoryName} 
                  underline="none" />
              </ListItemButton>
            </ListItem></Link>
          ))}
          </List>
        </div>
    
        </Drawer>



            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" component="div" fontSize='small' sx={{ display:'flex',flexDirection:'column',flexGrow: 1 }}>
          
          <Button  color="inherit" variant="text"    
          sx={{
            // display:'flex',
            justifyContent:'flex-start',
            // alignContent:'flex-start',
            // flexWrap:'wrap',
            
            
            
          }}>ℳʏ ŚHŌpĪNĜ ŚĪŢĒ</Button>
         
          </Typography>
       
      {  /* Search fiels in header*/}
        
         
         <IconButton size="small" aria-label="show no ofitems in cart" color="inherit">
          <Badge badgeContent={basket?.length} color="info"> 
             <Link to="/MyCart">
                 <ShoppingCartTwoToneIcon
                   sx={{
                     ":hover": {
                       
                       bgcolor: "inhert",
                       color: "inhert",
                       gap:"1px"
                      }  
                      }}
                  >
                   </ShoppingCartTwoToneIcon>
         
            </Link> 
          </Badge>
          </IconButton>

          {/*DArk theme and light theme icon*/}
  
    <IconButton   onClick={() => toggleTheme()} sx={{ ml: 1 }} color="inherit" checked={themeMode === 'dark-theme'} >
        {themeMode === 'dark-theme' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
          
        
 

          <Link to={!user && '/Login'}>
          <Button color="inherit" onClick={handleAuthentication}
        variant="text"  type="button"
          sx={{
            
            ":hover": {
              
               fontSize:'1rem',
               color: "white",
              gap:"2px"
             }  
          }}
          >{user ? 'LogOut' : 'LogIn'}</Button>
          
      </Link>
      
        
        </Toolbar>
      </AppBar>
    </Box>
    </header>
  );
};

export default Header;