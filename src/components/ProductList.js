import { useEffect, useState } from "react"

import Product from "../components/Product";

import '../css/ProductList.css';


function ProductList(){
        
    const [products, setProducts] = useState([{
        _id:"",
        name: "",
        price: 0,
        description: "",
        category:"",
        quantity:0,
        bestseller: false,
        photoURL:""
    }]);


    useEffect(()=>{

        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products`)
        .then(response=>response.json())
        .then(json=>{
            setProducts(json);
    
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    
    
    },[])


    return(
        <div>
            <span className="prodTitle">Products</span>
            <div className="productList">
                {products.map((prod, index) => (<Product key={index} id={prod._id} name={prod.name} price={prod.price} description={prod.description} category={prod.category} quantity={prod.quantity} bestseller={prod.bestseller} photoURL={prod.photoURL} />))}
            </div>
        </div>
    )
}

export default ProductList;