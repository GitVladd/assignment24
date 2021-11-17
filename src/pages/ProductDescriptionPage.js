
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import '../css/ProdDescPage.css';




const ProductDescriptionPage = () => {



    const { id } = useParams();

    const [product, setProduct] = useState({
        photoURL: "",
        name: "",
        description: "",
        price: 0,
        category: ""
    })


    useEffect(() => {

        //communicate with the backend!
        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/${id}`)
            .then(response => response.json())
            .then(json => {


                setProduct(json);

            })
            .catch(err => {
                console.log(`Error ${err}`)
            })


    }, [])


    return (
        <div>
            <Header />
            <div className="prodDesc">
                <div className="prodLeft">
                    <img src={product.photoURL} alt={product.name}/>               
                </div>

                <div className="prodRight">
                    <h1 className="prodName">{product.name}</h1>
                    <h3 className="prodDesc">Description: {product.description}</h3>
                    <h3 className="prodCateg">Category: {product.category}</h3>
                    <h2 className="prodPrice">Price: {product.price}$</h2>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default ProductDescriptionPage;
