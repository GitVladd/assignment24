import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CategoryList from "../components/CategoryList";
import BestsellerList from "../components/BestsellerList";



const HomePage = () => 
{
    return(
        <div>
            <Header/>
            <HeroSection/>
            <CategoryList/>
            <BestsellerList/>
            <Footer/>
        </div>
    )
}

export default HomePage
