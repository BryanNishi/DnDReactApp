import React from "react";
import "./generators.css";
import NavBar from '../../components/NavBar';
import NameModal from '../../components/NameModal';
import LandModal from '../../components/LandModal';
import InnModal from '../../components/InnModal';
import DungeonModal from '../../components/DungeonModal';
import TreasureModal from '../../components/TreasureModal';
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
                        <Button className="btn" href="/character">
                            <p>Quick Character Generator</p>
                        </Button>

                        <Button className="btn" href="/guidedcharacter">
                            <p>Guided Character Generator</p>
                        </Button>

                        <Button className="btn" href="/advcharacter">
                            <p>Advanced Character Generator</p>
                        </Button>
                        <NameModal />

                    </Jumbotron>
                </Col>
                <Col md="4">
                    <Jumbotron className="jumbotron">
                        <h2>Non-Player Character Generators</h2>
                        <Button className="btn" href="/character">
                            <p>Quick NPC Generator</p>
                        </Button>
                        <Button className="btn" href="/npc">
                            <p>NPC Generator</p>
                        </Button>
                        <NameModal />
                    </Jumbotron>
                </Col>
                <Col md="4">
                    <Jumbotron className="jumbotron">
                        <h2>World Generators</h2>
                        <LandModal />
                        <InnModal />
                        <DungeonModal />
                        <TreasureModal />
                    </Jumbotron>
                </Col>

            </Row>

        </container>
    </div>

);

export default Generators;