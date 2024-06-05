import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {app}  from '../../firebaseConfig';
import { getAuth,GoogleAuthProvider,signInWithEmailAndPassword,signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { useState } from 'react';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

 function Login() {
  
    
    let auth = getAuth(app); 
    const navigate = useNavigate();
    let googleProvider = new GoogleAuthProvider();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
 

    const signIn = (e) => {
      
      e.preventDefault();
      signInWithEmailAndPassword(auth,email,password)
      .then((response) => {
      
        navigate("/Home");
              
        console.log(response.user)
      })
      .catch((err) => {
        alert(err.message)
      })
    }
 
   const signInWithGoogle = (e) => {
    e.preventDefault(); 
         signInWithPopup(auth,googleProvider)
          .then((response) => {
            
            console.log(response.user)
              navigate("/Home");
              
              

          })
          .catch((err) => {
            alert(err.message);
          });
       
        } 


  return (
   
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mb:6,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form"     sx={{ mt: 1 }}>
            <TextField
              value={email}
              margin="normal"
              required
              fullWidth
              
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={e => setEmail(e.target.value)}
              autoFocus
              
            />
            <TextField
              value={password}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            
            <Button  
                
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signIn}
            >
              Log In
            </Button>
            <Button  
                
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signInWithGoogle}
            >
              Log In With Google
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Register" variant="body2">
                  {"Need an account? "}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    
  );
}
export default Login;


// import React, {useState} from "react";
// import { TextField, Button, Box } from "@mui/material";
// import { Link } from "react-router-dom"
// // import  './styles.css';
// import {app}  from '../../firebaseConfig';
// import { getAuth,createUserWithEmailAndPassword} from "firebase/auth";

// const Login = () => { 
    
//     let auth = getAuth(); 
//     const [data,setData] =useState({});

//     const handleInputs = (event) => {
//         let newInput = { [event.target.name]: event.target.value };

//         setData({...data, ...newInput });
//     };
 
 
//    const handleSubmit = () => {
        
//          createUserWithEmailAndPassword(auth,data.email, data.password)
//           .then((response) => {
            
//              console.log(response.user);

//           })
//           .catch((err) => {
//             alert(err.message);
//           });
       
//         } 

     
//     return ( 
//         <div className="App-header">
//       <input
//         placeholder="Email"
//         name="email"
//         type="email"
//         className="input-fields"
//         onChange={(event) => handleInputs(event)}
//       />
//       <input
//         placeholder="Password"
//         name="password"
//         type="password"
//         className="input-fields"
//         onChange={(event) => handleInputs(event)}
//       />

//       <button onClick={handleSubmit}>Log In</button>

//       </div>
    
//     )
//     }
//export default  Login;