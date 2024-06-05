// import {  Box, Container, CssBaseline,Grid,List, ListItem,  ListItemButton, ListItemIcon, ListItemText ,Toolbar,} from '@mui/material';

// import React, { useEffect, useState } from 'react';
// import CategoryApi from '../../modules/CategoryApi';
// import { Link} from 'react-router-dom';



// const drawerWidth = 240;

// export const Category=()=>{

//     const [categories,setCategories] = useState([]);

//     useEffect(() => { 
//         CategoryApi.getCategory(response =>{
//             if (response.status === 'success') { setCategories(response.data);
//             }
//         });

//     },[]);
//   return (
//     <>
//     <React.Fragment>
//   <CssBaseline />
//   <Grid item={true} >
//      <Container >
//         <Box >
    
//       <Toolbar />
//       <Divider dark/>
//       <Box>
      
//       <List>
      
//         {categories.map(category => (
//           <Link  to={`${category.categoryName}`} >
             
//           <ListItem key={`${category.id}`} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
            
//               </ListItemIcon>
//               <ListItemText  primary={category.categoryName} />
//             </ListItemButton> 
//           </ListItem>
//           </Link>
//         ))}
        
//       </List>
      
//       </Box>
  
//   );
//   </Box>
//     </Container>
//   </Grid>
//   </React.Fragment>

 
//     </>

//     );
//    };

// export default Category;