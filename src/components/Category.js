import React from 'react';

import '../css/Category.css';

function Category(props){
    return(
            <a href={`products/category/${props.name}`} title="">{props.name}</a>
    )
}


export default Category;