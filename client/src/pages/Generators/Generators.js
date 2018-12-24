import React, { Component } from "react";
import "./generators.css";
import NavBar from '../../components/NavBar';
import Button from "../../components/Button";
import { Jumbotron, Row, Col } from 'reactstrap';



class Generators extends Component {

    state = {
        charGenerators: [
            { href: "/character", name: "Quick Character Generator" },
            { href: "/guidedcharacterr", name: "Guided Character Generator" },
            { href: "/advcharacter", name: "Advanced Character Generator" },
            { href: "/name", name: "Character Name Generator" }
        ],
        npcGenerators: [
            { href: "/character", name: "Quick NPC Generator" },
            { href: "/npc", name: "NPC Generator" },
            { href: "/name", name: "NPC Name Generator" }
        ],
        worldGenerators: [
            { href: "/land", name: "Land Name Generator" },
            { href: "/inn", name: "Inn Name Generator" },
            { href: "/dungeon", name: "Dungeon Generator" },
            { href: "/treasure", name: "Treasure Generator" },
        ]
    }


    render() {

        let charButtons = (
            <div>
                {this.state.charGenerators.map(char => {
                    return <Button
                        href={char.href}
                        name={char.name} />
                })}
            </div>
        );

        let npcButtons = (
            <div>
                {this.state.npcGenerators.map(npc => {
                    return <Button
                        href={npc.href}
                        name={npc.name} />
                })}
            </div>
        );

        let worldButtons = (
            <div>
                {this.state.worldGenerators.map(world => {
                    return <Button
                        href={world.href}
                        name={world.name} />
                })}
            </div>
        );

        return (
            <div className="generator">
                <NavBar />
                <h1>Random Generators</h1>
                <Row>
                    <Col md="4">
                        <Jumbotron className="jumbotron">
                            <h2>Character Generators</h2>
                            {charButtons}
                        </Jumbotron>
                    </Col>
                    <Col md="4">
                        <Jumbotron className="jumbotron">
                            <h2>Non-Player Character Generators</h2>
                            {npcButtons}
                        </Jumbotron>
                    </Col>
                    <Col md="4">
                        <Jumbotron className="jumbotron">
                            <h2>World Generators</h2>
                            {worldButtons}
                        </Jumbotron>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Generators;