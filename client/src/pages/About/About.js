import React from "react";
import "./style.css";
import NavBar from '../../components/NavBar'

const About = () => (
    
    <div id="about">
    <NavBar />
        <h1>Welcome to the Dungeon Master's Database</h1>
        <ul>
            <li>Run a game with the DM Screen!</li>
            <li>Lookup monster stats with the Monster Manual!</li>
            <li>Create your character and NPCs with the Character Creator!</li>
            <li>Create your own world with the Lore Generator!</li>
            <li>Save/load your games and charactrers!</li>
        </ul>
        <a>NOTICE: This is a student project and is NOT to be distributed! Website contains unlicened
            copyrighted works.</a>
        <button>Login</button>
    </div>
);

export default About;