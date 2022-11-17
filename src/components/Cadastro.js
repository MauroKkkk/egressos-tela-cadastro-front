import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsMicrosoft } from 'react-icons/bs';
import { useState } from 'react';
import './loginredes.css'
import React from 'react';
import NavBar from './NavBar'
import {Link} from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars-2'
import fire from './fire'
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import "./Cadastro.css";
import axios from 'axios';



function Cadastro() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [cep, setCep] = useState("");
  const [wcep, setWcep] = useState(""); //
  const [institution, setInstitution] = useState("");
  const [courseName, setCourseName] = useState("");
  const [dateIn, setDateIn] = useState("");///
  const [dateOut, setDateOut] = useState(""); ///
  const [acting, setActing] = useState("");
  const [workCNPJ, setWorkCNPJ] = useState("");//
  const auth = getAuth();

  const facebook = () => {
    signInWithPopup(auth, new FacebookAuthProvider())
      .then((res) => {
        axios.get('https://graph.facebook.com/v15.0/me?fields=name%2Cemail%2Cbirthday&access_token=EAAGBvnAFUZCUBAGJvS4Idkw91OOBfJTRTzPD7KjAkpZBP8M1dC1oKwo7CuW9ScmAMJQSd6U1suRpRYX9uTOYVqrnx1Tm3ZBKh99ukY9vleZCfv9ccUZC1jvUMQ1b5TrFzQRZA3ml6y5hXpQoUVsVi3J84RONiQmrQkONEnDOOUAoFvaHhgKCyFLYZA1ar1WJyhJqoDo4XEY55gZCwjpiQFhZBAZBLCJkmklD9ZCDZCrFvEO1xTMrfS8cw3It')
        .then(response=>{
          setEmail(response.data.email)
          setName(response.data.name)
          console.log(res)
      })
      .catch((e) =>{
          console.log(e)
      })
      })
      .catch((err) => console.log(err))

  }

  const submitCadastro = () => {
    axios.post("http://localhost:3001/cadastro", {
      name: name,
      password: password,
      email: email,
      date: date,
      cep: cep,
      acting: acting,
      workcnpj: workCNPJ,
      wcep: wcep,
      institution: institution,
      courseName: courseName,
      dateOut: dateOut,
      dateIn: dateIn,

    })
    .then(() => {
      console.log(name)
      console.log(email)
      alert("successful to insert")
    })
  }

  return (
    <>
    <NavBar/>
    <Scrollbars style={{height: '90vh' }}>
      <div className="wrap-login">
        <div className="login-form">
            <span className="login-form-title"> Egressos </span>

            <div className="wrap-input">
              <input
                className={name !== "" ? "has-val input" : "input"}
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Name"></span>
            </div>
            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="text"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder='Email'></span>
            </div>
            <div className="wrap-input">     
              <input
                className={date !== "" ? "has-val input" : "input"}
                type="date"
                value={date}
                required
                onChange={(e) => setDate(e.target.value)}
              />
              <span className="focus-input"></span>
            </div>
            <div className="wrap-input">
              <input
                className={cep !== "" ? "has-val input" : "input"}
                type="number"
                value={cep}
                required
                onChange={(e) => setCep(e.target.value)}
              />
              <span className="focus-input" data-placeholder="CEP"></span>
            </div>
            <div className="wrap-input">
              <input
                className={acting !== "" ? "has-val input" : "input"}
                type="text"
                required
                value={acting}
                onChange={(e) => setActing(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Action"></span>
            </div>
            <div className="wrap-input">
              <input
                className={workCNPJ !== "" ? "has-val input" : "input"}
                type="number"
                required
                value={workCNPJ}
                onChange={(e) => setWorkCNPJ(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Work CNPJ"></span>
            </div>
            <div className="wrap-input">
              <input
                className={wcep !== "" ? "has-val input" : "input"}
                type="number"
                value={wcep}
                required
                onChange={(e) => setWcep(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Work CEP"></span>
            </div>
            
            <div className="wrap-input">
              <input
                className={institution !== "" ? "has-val input" : "input"}
                type="number"
                value={institution}
                required
                onChange={(e) => setInstitution(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Institution Code"></span>
            </div>
            <div className="wrap-input">
              <input
                className={courseName !== "" ? "has-val input" : "input"}
                type="text"
                value={courseName}
                required
                onChange={(e) => setCourseName(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Course Name"></span>
            </div>
            <div className="wrap-input">
              <input
                className={dateIn !== "" ? "has-val input" : "input"}
                type="date"
                value={dateIn}
                required
                onChange={(e) => setDateIn(e.target.value)}
              />
              <span className="focus-input"></span>
            </div>
            <div className="wrap-input">
              <input
                className={dateOut !== "" ? "has-val input" : "input"}
                type="date"
                value={dateOut}
                required
                onChange={(e) => setDateOut(e.target.value)}
              />
              <span className="focus-input"></span>
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
                  <span><FaFacebookSquare onClick={() => facebook()} style={{width:30,height:50, color:'#3E5D9E', cursor:'pointer'}}/></span>
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
    </Scrollbars>

        </>
  );
}

export default Cadastro;