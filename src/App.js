import './App.css';
import React, { useState } from "react";
import Home from './Home.js';
import { Route, Routes, useLocation } from "react-router-dom";
import {defaultDogList} from './defaultDogList.js';
import DogList from './DogList';
import DogDetails from './DogDetails';
import ColorList from './ColorList.js';
import Color from './Color.js';
import ColorForm from './ColorForm.js';


function App() {
  const {dogs} = defaultDogList;
  const [colors, setColors] = useState(['red', 'orange', 'yellow', 'green', 'blue', 'purple']);
  const location = useLocation();
  const addColor = (color) => {
    setColors([...colors, color]);
  }
  console.log(location.pathname)
  const path = location.pathname;
  const pathColor = path.split('/')[2]
  console.log(pathColor)
  return (
    <div className="App">
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/dogs" element={<DogList />}/>
          <Route path="/dogs/:dogName" element={<DogDetails />} />
          <Route path="/dogs/*" element={<DogList />} />
          <Route path="/colors" element={<ColorList colors={colors}/>} />
          <Route path="/colors/:color" element={<Color />} />
          <Route path="/colors/*" element={<ColorList colors={colors} />} />
          <Route path="/colors/new" element={<ColorForm addColor={addColor} />} />
        </Routes>
    </div>
  );
}

export default App;
