import React from "react";
import { Link, useParams } from "react-router-dom";
import { defaultDogList } from "./defaultDogList";
import './App.css';


const DogDetails = () => {
  const {dogName} = useParams();
  const {dogs} = defaultDogList;
  const details = dogs.find(i => i.name === dogName);
  console.log(details)
  const {name, age, facts} = details;
  return (
    <div>
      <h1>{name}</h1>
      <h3>Age {age}</h3>
      <ul>
        {facts.map(i => {
          const factKey = dogName+"fact#"+facts.indexOf(i);
          return (
            <li key={`${factKey}`}>{i}</li>
          )
        })}
      </ul>
      <Link to="/dogs"><button className="app-btn go-back-btn">Go Back</button></Link>
    </div>
  );
};

export default DogDetails;
