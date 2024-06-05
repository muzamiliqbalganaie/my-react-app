import * as React from "react";
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './pages/Products/products';
import Home from './pages/Home';
import Clothes from './pages/Clothes';
import Bags from './pages/Bags';
import Shoes from './pages/Shoes';
import HomePage from './components/HomePage';
import ProductDetails from './pages/ProductDetails';
import { ItemDetail } from './pages/ItemDetails';
import Header from './components/Header';
import ClothesDetail from './pages/ClothesDetails';
import ShoesDetail from './pages/ShoesDetail';
import BagsDetail from './pages/BagsDetail';
import Footer from './components/Footer';
import Login from './components/Login';
import Payment from './components/Payment';
import Register from "./components/Register";
import MyCart from "./components/MyCart";
import {auth} from "./firebaseConfig";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
// import { Elements, } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";
import { ThemeProvider } from "./StateProvider";
import { useState } from "react";

const stripePromise = loadStripe("pk_test_51P1RWxSFgidbdMSV0RIio5qJiwH1V7bcWwDykz0g0TJe6n6esDG67gbrRtePdhp6CQFAwU2lBvmJeqPYMvd45P5B00dzauw47q");

function App() {
  
 //State Provider For saving USer has login Or logout
  const [{},dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
  
      if (authUser) {
        //the user just logged in /the user was logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }else {
        //the user logged out
        dispatch({
          type: 'SET_USER',
          uesr: null
        })
      }
    })
  },[])




  const [themeMode,setThemeMode] = useState('light-theme')

  const darkTheme = () => {
     setThemeMode('dark-theme')
}

 const lightTheme = () => {
     setThemeMode('light-theme')

}

useEffect(() => {
   document.body.className = themeMode;
}, 

[themeMode])
  
  return (
    <>
   
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <Header/>  
      <HomePage> 
      </HomePage>
  
    <Routes >
       <Route path="/" element={ <Login />} />
       <Route path="/Orders" element={<Orders stripePromise={stripePromise} />}/>
       <Route path="/Login" element={<Login />}/>
       <Route path="/Products" element={ <Products />} />
       <Route path="/Home" element={ <Home />} />
       <Route path="/Clothes" element={ <Clothes />} />
       <Route path="/Bags" element={ <Bags />} />
       <Route path="/Shoes" element={<Shoes />}/>
       <Route path="/Payment"  element={<Payment stripePromise={stripePromise} />}/>        
       <Route path="/Register" element={<Register />}/>
       <Route path="/MyCart" element={<MyCart/>}/>
       <Route path="product/:productId" element={<ProductDetails />}/>
       <Route path="clothes/:clothId" element={<ClothesDetail />}/>
       <Route path="shoes/:shoeId" element={<ShoesDetail/>}/>
       <Route path="bags/:bagId" element={<BagsDetail/>}/>
       <Route path= "home/:homeId" element={<ItemDetail/>}/>
       <Route path="*" element={" Route Not found Route Not found Route Not found Route Not found Route Not found Route Not found Route Not found Route Not found ....page not found error.page not found error.page not found error.page not found error."}/>
    </Routes> 
   
   

       <Footer/>
    
    
  
  

       </ThemeProvider>   
 
    </> 
    
  );
};

export default App;
