import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import './styles.css';
import {  ThemeProvider, } from "../../StateProvider";
import { useState } from "react";
export const Footer=()=> {
  

const [footerTheme,setFooterTheme] = useState('light-mode')

  return (
    <ThemeProvider value={footerTheme} >
        <Box className={`footer-Box ${footerTheme}`}
    
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.inhw[800],
        p: 5,
        position:"static"
        
        // display:"flex",
        // flexWrap:"wrap",
        // justifyContent:"end",
        // alignItems:"flex-end",
        
      }}
    >
      
      
        <Grid   container spacing={2}>
          <Container 
          sx={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"end",
            alignItems:"flex-end",
            gap:2,
            
            
            
          }} >
          <Grid  item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary"  gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              We are The Shopping company, dedicated to providing the best service to our
              customers.❤️💕💕
            </Typography>
          </Grid>
     
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" >
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              Jammu & Kashmir,India
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              Email: myshopingsite.com
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              Phone: +315685268
            </Typography>
          </Grid>
          </Container>
         
          
          <Container 
          sx={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"flex-end",
            alignItems:"flex-end",
            alignContent:"flex-end"
                        
            
          }} >
          <Grid sx={{mt:2}} item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary"  >
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/_iammuzamil/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          
          </Grid></Container>
        </Grid>
        
        <Box mt={2}>
          <Typography variant="body2" color="text.secondary" align="center" >
            {"Copyright © "}
            <Link color="inherit" href="https://amazon.com/">
              Our Website
            </Link>{"."}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
    
    </Box>
    </ThemeProvider>

    
  );
}

export default Footer;