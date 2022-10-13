import React from 'react';
import NavMenu from './NavBar';

function Hero(props){
    return(
        <>
        <NavMenu/>
        <div className='Hero'>
            <nav>
                <h3>123123</h3>
                
                <button onClick={props.handleLogout}>Logout</button>
            </nav>
        </div>
        </>
    )
}
export default Hero;