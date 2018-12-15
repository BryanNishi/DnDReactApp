import React from 'react';
import NavBar from '../../components/NavBar';
import "./monsters.css"


const Monsters = () => (
    <div className="monsterBody">
        <NavBar />
        <h1>Monster Manual</h1>
         <input placeholder="Search for Monster Here" />
        <button>Search</button>
        <a>Full Monster Manual/Search Result Loaded HERE</a>
    </div>
);

export default Monsters;