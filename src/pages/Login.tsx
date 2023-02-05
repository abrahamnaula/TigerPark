import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Background from "../assets/clemson-bck.png";
import '../styles/Home.css'
import '../styles/Login.css'
import {useCookies} from "react-cookie";
import {Link} from "react-router-dom";
import axios from "axios";


const Login = () => {
    const [userCookies, setUserCookies, removeUserCookies] = useCookies(['username']);
    const [passwordCookies, setPasswordCookies, removePasswordCookies] = useCookies(['password']);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <section className="home">
            <Header />
            <div className="Login">
                <div className="LoginBox">

                    <div className="LoginHeader">
                        Login
                    </div>
                    <div className="inputs">
                        <input onChange={e => setUsername(e.target.value)} className="email" placeholder="Username"/>
                        <input onChange={e => setPassword(e.target.value)} className="password" placeholder="Password" type="password"/>
                    </div>

                    <div style={{display:"flex", justifyContent: "center"}}>
                        <Link to='/'>
                            <button onClick={() => {
                                axios.post('http://198.21.156.104:3000/auth', {
                                    username,
                                    password
                                }).then(() => {
                                    setUserCookies('username', username, {path: '/'})
                                    setPasswordCookies('password', password, {path: '/'})
                                })
                            }} className="submitButton">Login</button>
                        </Link>
                    </div>

                </div>

            </div>
            <img src={Background} alt="bg"/>
        </section>
    );
};

export default Login;