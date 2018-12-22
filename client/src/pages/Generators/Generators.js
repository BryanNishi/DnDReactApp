import React, { Component } from "react";
import API from "../../utils/API";
import "./generators.css";
import NavBar from '../../components/NavBar';
import NameModal from '../../components/NameModal';
import LandModal from '../../components/LandModal';
import InnModal from '../../components/InnModal';
import DungeonModal from '../../components/DungeonModal';
import TreasureModal from '../../components/TreasureModal';
import { Button, Jumbotron, Row, Col } from 'reactstrap';
import { List, ListItem } from "../../components/List";


class Generators extends Component {

     // Setting our component's initial state
  state = {
    inns: []
};

// When the component mounts, load all books and save them to this.state.books
componentDidMount() {
    this.loadInn();
}

// Loads all books  and sets them to this.state.books
loadInn = () => {
    API.getInn()
    .then(res => this.setState({ inns: res.data }))
    .catch(err => console.log(err));
    
};




    render() {
        return (

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
                    <Jumbotron>
                    
                    </Jumbotron>
                    </Row>

                </container>
            </div>

        );
    }
}

export default Generators;