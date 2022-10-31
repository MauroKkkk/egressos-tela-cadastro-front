/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import NavMenu from './NavBar';
import axios from 'axios';
import { useState } from 'react';

function Hero(props){
    const {face} = props
    const [email, setEmail] = useState('')
    const [gender,setGender] = useState('')
    const [birthday, setBirthday] = useState('')
    const [picture, setPicture] = useState('')
    const [name, setName] = useState('')
    const [hometown, setHometown] = useState('')
    const [re, setRe] = useState(false)
    console.log({face})

    if(re === false && face === true)
    axios.get('')
    .then(response=>{
        setEmail(response.data.email)
        setName(response.data.name)
        setBirthday(response.data.birthday)
        setPicture(response.data.picture.data.url)
        setHometown(response.data.hometown.name)
        setGender(response.data.gender)
        setRe(true)
        console.log(re)
        
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
                <h3>{gender}</h3>
                <h3>{birthday}</h3>
                <h3>{hometown}</h3>
                <img style={{width:50, height:50}} src={picture}/>
                
                <button onClick={props.handleLogout}>Logout</button>
            </nav>
        </div>
        </>
    )
}
export default Hero;