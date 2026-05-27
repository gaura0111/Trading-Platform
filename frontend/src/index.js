import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import SupportPage from './Landing_page/support/SupportPage';
import ProductPage from './Landing_page/products/ProductPage';
import SignupPage from './Landing_page/signup/SignupPage';
import Login from './Landing_page/signup/Login';
import Homepage from './Landing_page/home/Homepage';
import Aboutpage from './Landing_page/About/Aboutpage';
import PricingPage from './Landing_page/pricing/PricingPage';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import Notfound from './Notfound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/signup' element={<SignupPage/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/About' element={<Aboutpage/>}></Route>
    <Route path='/Product' element={<ProductPage/>}></Route>
    <Route path='/Pricing' element={<PricingPage/>}></Route>
    <Route path='/Support' element={<SupportPage/>}></Route>
    <Route path='*'element={<Notfound/>}></Route>
  </Routes>
  <Footer />
  </BrowserRouter>
);

