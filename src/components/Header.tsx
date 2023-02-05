import React from 'react';
import CarIcon from '../assets/car.png'
import ProfileIcon from '../assets/profile-icon.png'
import '../styles/Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="left-header">
                <img src={CarIcon}/>
                <h5>About</h5>
            </div>

            <div className="right-header">
                <img src={ProfileIcon}></img>
            </div>
        </header>
    );
};

export default Header;
