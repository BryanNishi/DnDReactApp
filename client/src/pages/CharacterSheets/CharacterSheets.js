import React from "react";
import "./style.css";
import NavBar from '../../components/NavBar'
import CharSheet from '../../components/CharSheet'

const Sheet = () => (
    <div className="sheet">
    <NavBar />
    <h1>Character Sheets</h1>
    <CharSheet />

</div>
);

export default Sheet;