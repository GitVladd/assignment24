import { useEffect, useState } from "react"


import Product from "../components/Product";

import '../css/ProdByCategory.css';


function ProdByCategoryList(props) {
    const [prodByCategory, setProdCategory] = useState([{
        _id: "",
        name: "",
        price: 0,
        description: "",
        category: "",
        quantity: 0,
        bestseller: false,
        photoURL: ""
    }]);


    useEffect(() => {

        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/category/${props.ctgry}`)
            .then(response => response.json())
            .then(json => {
                setProdCategory(json);
            })
            .catch(err => {
                console.log(`Error ${err}`)
            })


    }, [])

    return (
        <div className="prodByCategory">
            <span className="categTitle">Product Categories</span>
            <div className="prodByCategoryList">

                {prodByCategory.map((prod, index) => (<Product key={index} id={prod._id} name={prod.name} price={prod.price} description={prod.description} category={prod.category} quantity={prod.quantity} bestseller={prod.bestseller} photoURL={prod.photoURL} />))}
            </div>
        </div>
    )
}

export default ProdByCategoryList;