import React from 'react';
import NavMenu from './NavBar';
import axios from 'axios';
import { useState } from 'react';

function Hero(props){
    const [email, setEmail] = useState('')
    const [gender,setGender] = useState('')
    const [birthday, setBirthday] = useState('')
    const [picture, setPicture] = useState('')
    const [name, setName] = useState('')
    const [req, setReq] = useState(false)

    if(!req)
    axios.get('https://graph.facebook.com/v15.0/me?fields=id%2Cname%2Cemail%2Cbirthday%2Cgender%2Cpicture&access_token=EAAGBvnAFUZCUBALIA1XOLg1wfbPxdlFBjSiM5MZBsMpRzExZB203zRQbbnLggt3RzuqtCPNV3ZAY7i0ava93slPcGqRqNl3Q1XmFdsL9T9MCjJauVf78iL5hj1hEjQ0ODlrJhnLR4EM81T13cRrVkXsxCY994wCCBf6jSXqhaHWbrOvqDJ4cUFGSWcWXv6J0ZBvTy6fPC4ZBKcjpIWigR1cs0R8rppfLhIczZBuBPpir57zQBqPG1ZAh')
    .then(response=>{
        setEmail(response.data.email)
        setName(response.data.name)
        setBirthday(response.data.birthday)
        setPicture(response.data.picture.data.url)
        
    })
    .catch((e) =>{
        console.log(e)
    })
    return(
        <>
        <NavMenu/>
        <div className='Hero'>
            <nav>
                <h3>{name}</h3>
                <h3>{email}</h3>
                <h3>{birthday}</h3>
                <img style={{width:50, height:50}} src={{uri: picture}}/>
                
                <button onClick={props.handleLogout}>Logout</button>
            </nav>
        </div>
        </>
    )
}
export default Hero;