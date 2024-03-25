import React from "react";
import { Link } from "react-router-dom";
import { defaultDogList } from "./defaultDogList";
import './App.css';


const DogList = ({ dogs = defaultDogList.dogs }) => {
    const names = dogs.map(i => i.name);

    return (<div className="app-div">
        <h1>Here are our good boys!</h1>
        <ul>
            {names.map(dogName => {
                return (
                    <li key={`${dogName}-link`}>
                        
                            <Link to={`/dogs/${dogName}`}><button className="app-btn">{dogName}</button></Link>
                        
                    </li>
                )
            })}
        </ul>
        <Link to='/'><button className="app-btn go-back-btn">Back Home</button></Link>

    </div>)
};

export default DogList;