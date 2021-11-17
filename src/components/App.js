import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";


import HomePage from '../pages/HomePage';
import ProductCategoryPage from '../pages/ProductCategoryPage'
import ProductDescriptionPage from '../pages/ProductDescriptionPage';
import ProductListingPage from '../pages/ProductListingPage'
import SignUpPage from '../pages/SignUpPage'


import '../css/App.css';

const App = () => {

    return (
  
              
            <Router>
                  <Routes>
                      <Route path="/" element ={<HomePage />} />
  
                      <Route path= "/registration" element={<SignUpPage/> } />

                      <Route path= "/products/category/:category" element={<ProductCategoryPage/>} />
 
                      <Route path= "/products" element={<ProductListingPage/>  } />                          

                      <Route path= "/products/:id" element={<ProductDescriptionPage/> } />

                  </Routes> 
            </Router>
              
     
    )
  }

export default App;