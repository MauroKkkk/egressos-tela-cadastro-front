import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsMicrosoft } from 'react-icons/bs';

import './loginredes.css'
import React from 'react';




import "./Login.css";

function Login(props) {
  const {email, setEmail, password, setPassword, handleLogin, handleSingup, hasAccount, setHasAccount, emailError, google, facebook, microsoft} = props;

  return (
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
            <p className="errorMsg">{emailError}</p>
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
              {hasAccount ?(
                <>
                  <button className="login-form-btn" onClick={handleLogin}>Sign in</button>
                  <div className="text-center">
                    <span className="txt1">Não possui conta? </span>
                    <span style={{cursor:'pointer'}} onClick={()=> setHasAccount(!hasAccount)} className="txt2">
                      Criar conta
                    </span>

                  </div>
                </>
              ) : (
                <>
                  <button className="login-form-btn" onClick={handleSingup}>Sing up</button>
                  <div className="text-center">
                    <span className="txt1">Possui conta? </span>
                    <span style={{cursor:'pointer'}} onClick={()=> setHasAccount(!hasAccount)} className="txt2">
                      Login
                    </span>

                  </div>
                </>
              )}

            </div>
            <h5>Outras opçoes de login:</h5>
            <ul className="loginIcons">
                <li>
                  <span onClick={facebook}><FaFacebookSquare style={{width:30,height:50, color:'#3E5D9E', cursor:'pointer'}}/></span>
                </li>
                <li>
                  <span onClick={google}><FcGoogle style={{width:30,height:50,cursor:'pointer'}}/></span>
                </li>
                <li>
                  <span onClick={microsoft}><BsMicrosoft style={{width:30,height:50, color:'#0077B7',cursor:'pointer'}}/></span>
                </li>
            </ul>

            

          </div>
        </div>
  );
}

export default Login;