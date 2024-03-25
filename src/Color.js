import React from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';


const Color = () => {
    const { color } = useParams();
    const styling = {
        backgroundColor : `${color}`,
        width : '3000px',
        height : '1800px',
        overflow : 'hidden',
        position : 'fixed' 
    };
    return (
        <div style={styling}>
            <h1>{color}</h1>
            <Link to='/colors'>Back to colors</Link>
        </div>
    )
}

export default Color;