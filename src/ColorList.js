import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './App.css';


const ColorList = ({ colors }) => {
    return (
        <>
            <h1>Look at all these colors!</h1>
            <ul>
                {colors.map(i => {
                    const styling = {
                        backgroundColor: `${i}`,
                    };
                    return (
                        <li key={`${i}-button`}>
                            <Link to={`/colors/${i}`}>
                                <button style={styling} className="color-btn app-btn">{i}</button></Link>
                        </li>
                    )
                })}
            </ul>
            <div className='add-color-div'>
                <Link to='/colors/new'><button className='app-btn add-color-btn'>Add A Color</button></Link>
            </div>
            <Link to='/'><button className="app-btn go-back-btn">Back Home</button></Link>
        </>
    )
};

export default ColorList;