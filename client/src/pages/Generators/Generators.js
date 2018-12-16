import React from "react";
import "./generators.css";
import NavBar from '../../components/NavBar'
import { Button, Jumbotron, Row, Col } from 'reactstrap';

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
                        
                            <Button className="btn">
                                <p>Guided Character Generator</p>
                            </Button>
                       
                            <Button className="btn" href="/character">
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
                        <Button className="btn">
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
    </div>

);

export default Generators;