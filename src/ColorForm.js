import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';


const ColorForm = ({ addColor }) => {
    const [formColor, setFormColor] = useState('#FFFFFF');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormColor(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formColor);
        console.log(typeof formColor)
        navigate('/colors');
    }
    // const formColorInput = document.getElementById("formColorInput");
    // console.log(formColorInput)
    return (
        <div>
            <form>
                <label className='form-label'>Select a color:  
                {'  '}<input type="color"
                    className='form-color-input'
                    id="formColorInput"
                    name="formColor"
                    value={formColor}
                    onChange={handleChange}
                /></label>
                <button className='app-btn'onClick={handleSubmit}>Add!</button>
            </form>

        </div>
    )

}

export default ColorForm;