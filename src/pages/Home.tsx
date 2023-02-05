import React from 'react';
import Header from "../components/Header";
import Background from "../assets/clemson-bck.png";
import '../styles/Home.css'
import ClockIcon from "../assets/ClockIcon";
import SearchIcon from "../assets/SearchIcon";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <section className="home">
            <Header />
            <div className="hero-container">
                <h1>TigerPark</h1>
                <div className="time-fields">
                    <div className="start-field">
                        <input placeholder="Start" />
                        <ClockIcon />
                    </div>
                    <div className="end-field">
                        <input placeholder="End" />
                        <ClockIcon />
                    </div>
                </div>
                <div className="buttons">
                    <Link to='/parking' className="button">Find Spot <SearchIcon/></Link>
                    <Link to='/login'  className='button'>Logout</Link>
                </div>
            </div>
            <img src={Background} alt="bg"/>
        </section>
    );
};

export default Home;