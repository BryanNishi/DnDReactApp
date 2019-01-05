import React, { Component } from "react";
import { Jumbotron, Button } from 'reactstrap';
import $ from 'jquery';
import "./abilityroll.css";

class AbilityRoll extends Component {
    state = {
        buttons: {
            name: "Roll Ability Scores",
        }
    }
    componentDidMount() {
        // Dice Roll Function
        var rolls = [];
        //initial dice roll to fill rolls array
        $("#diceRoll").on("click", function () {

            rolls = [];
            $("#Str").empty();
            $("#Dex").empty();
            $("#Con").empty();
            $("#Int").empty();
            $("#Wis").empty();
            $("#Cha").empty();
            $(".rollResults").empty();
            //for loop to append rolled values to div
            for (let i = 0; i < 6; i++) {
                var result = Math.floor((Math.random() * 18) + 1);
                rolls.push(result);
                var a = $("<option value=" + result + ">" + result + "</option>");

                $(".abilityScore").append(a);
                
            }
            var b = $("<option selected>Choose Value</option>");
            $(".abilityScore").prepend(b);
    

            console.log("Rolls", rolls);
            $(".rollResults").html(rolls);
        })
        //user assigns value for stat, value is removed from options
        $(".abilityScore").change(function () {
            console.log("ability score", this.value);
            var a = parseInt(this.value);
            var b = rolls.indexOf(a);
            console.log(b);
            if (b > -1) {
                rolls.splice(b, 1);
            }
            console.log("New Rolls", rolls);
            $(".rollResults").html(rolls);
            
        });
       
    };
    render() {

        return (

            <Jumbotron className="container">
                <div>
                    <Button id="diceRoll">{this.state.buttons.name}</Button>
                    <h4 className="rollResults"></h4>
                </div>
                <div className="row" id="abilityScores">
                    <div className="form-group">
                        <label>Strength</label>
                        <select className="form-control abilityScore" id="Str">
                            <option selected>Roll</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Dexterity</label>
                        <select className="form-control abilityScore" id="Dex">
                            <option selected>Roll</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Constitution</label>
                        <select className="form-control abilityScore" id="Con">
                            <option selected>Roll</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label>Intelligence</label>
                        <select className="form-control abilityScore" id="Int">
                            <option selected>Roll</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Wisdom</label>
                        <select className="form-control abilityScore" id="Wis">
                            <option selected>Roll</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Charisma</label>
                        <select className="form-control abilityScore" id="Cha">
                            <option selected>Roll</option>
                        </select>
                    </div>
                </div>

            </Jumbotron>
        )
    }
}
export default AbilityRoll;