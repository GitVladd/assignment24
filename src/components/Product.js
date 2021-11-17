import React from 'react';

import '../css/Product.css';
import '../css/Bestseller.css';

function Product(props){
    return(
        <div className={props.bestseller? "bcard" : "card"}>

            <div className="imgBox">
                <img src={props.photoURL} alt={props.name} className="bitem"/>
            </div>

            <div className="contentBox">
                <h3>{props.name}</h3>
                <h2 className="price">{props.price}$</h2>
                <a href={`/products/${props.id}`} className="buy" >Product Description</a>
                {/* <Link to ={`/products/${props.id}`} className="buy" >Product Description</Link> */}
            </div>

        </div>
    )
}


export default Product;