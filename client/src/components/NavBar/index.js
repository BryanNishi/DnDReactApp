import React, { Component } from "react";
import './NavBar.css';
import d20 from '../../assets/images/dice-d20.png'
import $ from 'jquery';
import DicePanel from "../DicePanel"


class NavBar extends Component {
    componentDidMount() {
        $(".dicePanel").click(function () {
            $("#panel").slideToggle();
        });

        $(".close").click(function () {
            $("#panel").slideUp();
        });

    }

    render() {

        return (
            <div>

                <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
                    <img className="nav-icon" src={d20} alt="d20" onClick={this.dicePanel} />
                    <a className="navbar-brand" href="/">DM's Database</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/DM">DM Screen</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/monster">Monster Manual</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/spell">Spell Book</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Generators">Generators</a>
                            </li>

                            <li className="nav-item dicePanel">
                                <a className="nav-link" href="#">Dice</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Extras
                    </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {/* <a className="dropdown-item" href="dice.html">Dice Roller</a> */}
                                    <a className="dropdown-item" href="/sheet">Character Sheets</a>
                                    {/* <a className="dropdown-item" href="#">Something else here</a> */}
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">Search</a>
                            </li>



                        </ul>

                    </div>

                </nav>

                <div id="panel">
                    <DicePanel />

                </div>
                
            </div>

        );
    }
}

export default NavBar;