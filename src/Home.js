import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Home.css'


const Home = () => {
    return (
        <div className='home-div'>
            <h1>Welcome!</h1>

            <Link to="/dogs"><button className='home-btn'>Meet the Dogs!</button></Link>

            <h4>or</h4>

            <Link to="/colors"><button className='home-btn'>Try the Color Factory!</button>
            </Link>
        </div>
    );
}

export default Home;
