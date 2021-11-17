import React from "react"
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProdByCategoryList from "../components/ProdByCategoryList";


const ProductCategoryPage = () => 
{
    const {category} = useParams();

    return(
        <div>
            <Header/>   
            <ProdByCategoryList ctgry={category}/>
            <Footer/>
        </div>
    )   
}

export default ProductCategoryPage;
