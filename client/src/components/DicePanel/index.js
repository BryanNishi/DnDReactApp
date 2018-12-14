import React, { Component } from "react";
import './DicePanel.css'
import d4 from '../../assets/images/d4.png';
import d6 from '../../assets/images/d6.png';
import d8 from '../../assets/images/d8.png';
import d10 from '../../assets/images/d10.png';
import d12 from '../../assets/images/d12.png';
import d20 from '../../assets/images/d20.png';
import d100 from '../../assets/images/d100.png';
import $ from 'jquery';



class DicePanel extends Component {

    componentDidMount() {
        // Dice Roll Function
        var rolls = [];

        $(".diceRoll").on("click", function () {
            var multi = $("#multi").val();

            for (let i = 0; i < multi; i++) {
                var num = parseInt(this.value);
                var result = Math.floor((Math.random() * num) + 1);
                $("#rolls").append("D" + this.value + "= " + result + "<br/>")
                rolls.push(result);
                const add = (a, b) => a + b
                const sum = rolls.reduce(add)
                $("#rollTotal").html(sum);
            }
        })

        $("#clear").on("click", function () {
            rolls = [];
            $("#rolls").html("");
            $("#rollTotal").html("");
            $('#multi option').prop('selected', function () {
                return this.defaultSelected;
            });
        })
    }


    render() {
        return (
            <div  id="diceRow">
                
                    <h3>Click to Roll:
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    </h3>                   
               


                <div className="row">
                    <div className="col-sm">
                        <h2>D4</h2>
                        <button className="btn diceRoll" value="4"><img src={d4} className="img-fluid" alt="d4" /></button>
                    </div>
                    <div className="col-sm">
                        <h2>D6</h2>
                        <button className="btn diceRoll" value="6" ><img src={d6} className="img-fluid" alt="d6" /></button>
                    </div>
                    <div className="col-sm">


                        <h2>D8</h2>
                        <button className="btn diceRoll" value="8"><img src={d8} className="img-fluid" alt="d8" /></button>
                    </div>
                    <div className="col-sm">
                        <h2>D10</h2>
                        <button className="btn diceRoll" value="10"><img src={d10} className="img-fluid" alt="d10" /></button>
                    </div>
                    <div className="col-sm">
                        <h2>D12</h2>
                        <button className="btn diceRoll" value="12"><img src={d12} className="img-fluid" alt="d12" /></button>
                    </div>
                    <div className="col-sm">
                        <h2>D20</h2>
                        <button className="btn diceRoll" value="20"><img src={d20} className="img-fluid" alt="d20" /></button>
                    </div>
                    <div className="col-sm">
                        <h2>D100</h2>
                        <button className="btn diceRoll" value="100"><img src={d100} className="img-fluid" alt="d100" /></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <label for="multi">Multiplier:</label>
                        <select className="form-control" id="multi">
                            <option value="1" selected="selected">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="col-sm">
                        <h2>Rolls</h2>
                        <div className="jumbotron" id="rolls">
                        </div>
                    </div>
                    <div className="col-sm">
                        <h2>Total</h2>
                        <div className="jumbotron" id="rollTotal">
                        </div>
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-outline-warning" id="clear">Clear</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DicePanel;