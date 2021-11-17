import React from 'react';

import '../css/Footer.css';


function Footer(){
    return(
        <footer>
        <div className = "botnav">
            <div className="row">
                <div className="column">
                    <h1>Instagram</h1>
                    <h1>Facebook</h1>
                    <h1>Twitter</h1>
                </div>
                <div className="column">
                    <h1>Vlad</h1>
                    <h1>Ovsiienko</h1>
                    {/* <h1> </h1> */}
                </div>
                <div className="column">
                    <h1>WEB422</h1>
                    <h1>Assignment 2-4</h1>
                    {/* <h1> </h1> */}
                </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer;