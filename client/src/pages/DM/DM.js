import React, { Component } from 'react';
import './DM.css';
import DM_ScreenPDF from '../../assets/images/dmScreen.pdf';
import NavBar from '../../components/NavBar';
import Card from '../../components/BattleOrder/Card';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd';
import { Button, FormGroup, Input, Row, Col, Container } from 'reactstrap';
const update = require('immutability-helper');




class DM extends Component {
    state = {
        cards: [
            {
                id: 1,
                text: 'Character 1',
                ac: "AC",
                hp: "HP"
            },
            {
                id: 2,
                text: 'Characte 2',
                ac: "AC",
                hp: "HP"
            },

        ],

        name: "",
        ac: "",
        hp: "",
        intiative: ""
    }

    moveCard = (dragIndex, hoverIndex) => {
        const { cards } = this.state
        const dragCard = cards[dragIndex]

        this.setState(
            update(this.state, {
                cards: {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
                },
            }),
        )
    }

    addCharacterName = (event) => {

        this.setState({
            name: event.target.value
        })

    }

    addCharacterAC = (event) => {

        this.setState({
            ac: event.target.value
        })

    }

    addCharacterHP = (event) => {

        this.setState({
            hp: event.target.value
        })

    }

    addCharacterIntiative = (event) => {

        this.setState({
            intiative: event.target.value
        })

    }

    addCharacter = event => {
        event.preventDefault();

        let newCharacterObj = {
            id: this.state.intiative,
            text: this.state.name,
            ac: this.state.ac,
            hp: this.state.hp
        }

        console.log(newCharacterObj);

        let newCharacter = this.state.cards.concat(newCharacterObj);

        this.setState({ cards: newCharacter });

        this.setState({
            name: "",
            ac: "",
            hp: "",
            intiative: ""
        })

        document.getElementById("characterName").value = "";
        document.getElementById("characterHP").value = "";
        document.getElementById("characterAC").value = "";
        document.getElementById("characterIntiative").value = "";
    }

    render() {
        return (
            <div className="DM-Page">
                <NavBar />
                <div className="row">
                    <div className="col-sm-2 DM-Notes">
                        <div className="fixed-Notes">
                            <h2>DM's Notes</h2>
                            <textarea rows="15" cols="30" placeholder={"Type Notes Here"}></textarea>

                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div className="dmScreen">
                            <h1>DM Screen</h1>
                            <iframe src={DM_ScreenPDF} width="1200" height="500" className="DM_Screen" title="DM Screen" />
                        </div>
                    </div>

                </div>

                <h1>Battle Order</h1>

                <Container>
                    <FormGroup className="newCharacterInput">
                        <Row>
                            <Col>
                                <Input type="input" name="inputName" id="characterName" placeholder="Character Name" onChange={this.addCharacterName.bind(this)} />

                            </Col>

                            <Col sm="3">
                                <Input type="input" name="inputAC" id="characterAC" placeholder="Armor Class" onChange={this.addCharacterAC.bind(this)} />
                            </Col>

                            <Col sm="3">
                                <Input type="input" name="selectHP" id="characterHP" placeholder="Hit Points" onChange={this.addCharacterHP.bind(this)} />

                            </Col>

                            <Col sm="3">
                                <Input type="input" name="inputIntiative" id="characterIntiative" placeholder="Intiative" onChange={this.addCharacterIntiative.bind(this)} />

                            </Col>
                        </Row>
                    </FormGroup>



                    <FormGroup>
                        <Row>
                            

                            <Col md="12" md={{ size: 6, offset: 4 }}>

                                <Button onClick={this.addCharacter} className="newCharacterButton">
                                    Add Character
                                </Button>

                            </Col>

                            

                        </Row>

                    </FormGroup>
                </Container>

                <div className="card-container">
                    {this.state.cards.map((card, i) => (
                        <Card
                            key={card.id}
                            index={i}
                            id={card.id}
                            ac={card.ac}
                            hp={card.hp}
                            text={card.text}
                            moveCard={this.moveCard}
                        />
                    ))}
                </div>

            </div>
        );
    }
}


export default DragDropContext(HTML5Backend)(DM);
