import React from 'react';

function Hero({handleLogout}){
    return(
        <div className='Hero'>
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </div>
    )
}
export default Hero;