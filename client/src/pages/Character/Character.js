import React from "react";
import "./style.css";
import NavBar from '../../components/NavBar'

const Character = () => (
    
    <div className="character">
    <NavBar />
    <h1>Generated Character Sheet</h1>
        <div id="characterSheet">
        </div>
    </div>
);

export default Character;