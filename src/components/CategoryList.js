
import {useEffect,useState} from "react"

import Category from './Category';

import '../css/CategoryList.css';


function CategoryList(){
        
    const [categories, setCategories] = useState([]);


    useEffect(()=>{

        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/products/category`)
        .then(response=>response.json())
        .then(json=>{
            setCategories(json.data);
    
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    
    
    },[])


    return (
        <div className="single-category">
            <span className="categTitle">Product Categories</span>
            <ul className="list-unstyled">
                <li>{categories.map((category, index)=>(<Category key = {index} name={category}/>))}</li> 
            </ul>
        </div>

        // <div className="categoryList">
        //     <span>Category List</span>
        //     <main>
        //         
        //     </main>            
        // </div>

    )
}

export default CategoryList;