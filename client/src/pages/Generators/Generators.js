import React from "react";
import "./style.css";
import NavBar from '../../components/NavBar'

const Generator = () => (
    
    <div className="generatorBody">
    <NavBar />
        <h1>Generator</h1>

        <div class="container">
        <h1>Character Creator</h1>
        <div class="row createStart">
            <div class="jumbotron col-5">
                <h2>Player Character Options</h2>
                <a href="#" class="btn create-btn" role="button" id="RandomPC">Quick Player Character (Randomized)</a>
                <br/>
                <a href="basicCC.html" class="btn create-btn" role="button" id="PC">Create Basic Player Character
                    (Guided)</a>
                <br/>
                <a href="advCC.html" class="btn create-btn" role="button" id="AdvPC">Create Advanced Player Character</a>
            </div>
            <div class="jumbotron col-5">
                <h2>Non-Player Character Options</h2>
                <a href="#" class="btn create-btn" role="button" id="RandomNPC">Quick NPC (Randomized)</a>
                <br/>
                <a href="npc.html" class="btn create-btn" role="button" id="NPC">Create NPC</a>
            </div>
        </div>
    </div>

    </div>
);

export default Generator;