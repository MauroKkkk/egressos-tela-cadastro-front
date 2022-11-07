import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsMicrosoft } from 'react-icons/bs';
import { useState } from 'react';
import './loginredes.css'
import React from 'react';
import NavBar from './NavBar'
import {Link} from 'react-router-dom'



import "./Cadastro.css";
import axios from 'axios';



function Cadastro(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitCadastro = () => {
    console.log(email, password)
    axios.post("http://localhost:3001/api/insert", {
      password: password,
      email: email,
    })
    .then(() => {
      alert("successful to insert")
    })
  }

  return (
    <>
    <NavBar/>
        <div className="wrap-login">
          <div className="login-form">
            <span className="login-form-title"> Egressos </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={() => submitCadastro()}>Sing up</button>
              <div className="text-center">
                <span className="txt1">Possui conta? </span>
                <Link to="/Login"style={{cursor:'pointer'}} className="txt2">
                  Login
                </Link>
              </div>
            </div>
            <h5>Outras opçoes de login:</h5>
            <ul className="loginIcons">
                <li>
                  <span><FaFacebookSquare style={{width:30,height:50, color:'#3E5D9E', cursor:'pointer'}}/></span>
                </li>
                <li>
                  <span><FcGoogle style={{width:30,height:50,cursor:'pointer'}}/></span>
                </li>
                <li>
                  <span><BsMicrosoft style={{width:30,height:50, color:'#0077B7',cursor:'pointer'}}/></span>
                </li>
            </ul>

            

          </div>
        </div>
        </>
  );
}

export default Cadastro;