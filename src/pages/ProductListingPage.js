import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList"


const ProductListingPage = () => 
{
    return(
        <div>
            <Header/>
            <ProductList/>
            <Footer/>
        </div>
    )   
}

export default ProductListingPage;
