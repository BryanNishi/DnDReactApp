import React from "react";
<<<<<<< HEAD

import "./style.css";

=======
import "./generators.css";
>>>>>>> html
import NavBar from '../../components/NavBar'
import { Button, Jumbotron, Row, Col } from 'reactstrap';

<<<<<<< HEAD
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

=======
const Generators = () => (

    <div className="generator">
        <NavBar />
        <container>
            <h1>Random Generators</h1>
            <Row>
                <Col md="4">
                    <Jumbotron className="jumbotron">
                        <h2>Character Generators</h2>
                            <Button className="btn">
                                <p>Quick Character Generator</p>
                            </Button>
                        
                            <Button className="btn"  href="/guidedcharacter">
                                <p>Guided Character Generator</p>
                            </Button>
                       
                            <Button className="btn" href="/advcharacter">
                                <p>Advanced Character Generator</p>
                            </Button>
                            <Button className="btn">
                                <p>Character Name Generator</p>
                            </Button>
                       
                    </Jumbotron>
                </Col>
                <Col md="4">
                    <Jumbotron className="jumbotron">
                    <h2>Non-Player Character Generators</h2>
                        <Button className="btn">
                            <p>Quick NPC Generator</p>
                        </Button>
                        <Button className="btn" href="/npc">
                            <p>NPC Generator</p>
                        </Button>
                        <Button className="btn">
                            <p>NPC Name Generator</p>
                        </Button>
                    </Jumbotron>
                </Col>
                <Col md="4">
                    <Jumbotron className="jumbotron">
                    <h2>World Generators</h2>
                        <Button className="btn">
                            <p>Land Name Generator</p>
                        </Button>
                        <Button className="btn">
                            <p>Inn Name Generator</p>
                        </Button>
                        <Button className="btn">
                            <p>Dungeon Generator</p>
                        </Button>
                        <Button className="btn">
                            <p>Treasure Generator</p>
                        </Button>
                    </Jumbotron>
                </Col>
                
            </Row>
        </container>
>>>>>>> html
    </div>

);

export default Generators;