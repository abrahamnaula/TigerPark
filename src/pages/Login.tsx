import React from 'react';
import Header from "../components/Header";
import Background from "../assets/clemson-bck.png";
import '../styles/Home.css'
import '../styles/Login.css'
import ClockIcon from "../assets/ClockIcon";
import SearchIcon from "../assets/SearchIcon";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="home">
            <Header />
            <div className="Login">
                <div className="LoginBox">

                    <div className="LoginHeader">
                        Login
                    </div>
                    <div className="inputs">
                        <input className="email" placeholder="Email"/>
                        <input className="password" placeholder="Password" type="password"/>
                    </div>

                    <div style={{display:"flex", justifyContent: "center"}}>
                        <button className="submitButton">Login</button>
                    </div>

                </div>

            </div>
            <img src={Background} alt="bg"/>
        </section>
    );
};

export default Login;