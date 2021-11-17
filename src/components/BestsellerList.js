import {useEffect,useState} from "react"

import Product from './Product';

import '../css/BestsellerList.css';


function BestsellerList(){

    const [bestsellers, setBestsellers] = useState([{
        _id:"",
        name: "",
        price: 0,
        description: "",
        category:"",
        quantity:0,
        bestseller: true,
        photoURL:""
    }]);

    useEffect(() => {

        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/bestseller`)
            .then(response => response.json())
            .then(json => {
                setBestsellers(json);
            })
            .catch(err => {
                console.log(`Error ${err}`)
            })


    }, [])




    return(
        <div className ="bestsellers">
        <span className="bestselTitle">Bestsellers</span>
        <div className="bestsellersList">
            
                {bestsellers.slice(0, 5).map((bstslr, index)=>(<Product key = {index} id ={bstslr._id}name={bstslr.name} price={bstslr.price} description={bstslr.description} category={bstslr.category} quantity={bstslr.quantity} bestseller={bstslr.bestseller} photoURL={bstslr.photoURL}/>))}

            </div>
        </div>
    )
}

export default BestsellerList;