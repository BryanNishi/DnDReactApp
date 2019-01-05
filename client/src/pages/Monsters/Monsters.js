import React, { Component } from "react";
import NavBar from '../../components/NavBar';
import "./monsters.css"
import API from '../../utils/API';
import $ from 'jquery';


class Monsters extends Component {

    state = {
        searchList: [],
        searchResults: []
    }

    componentDidMount() {
        API.getMonster("")
            .then(res => {
                this.setState({ searchList: res.data.results.map(monster => monster.name) });


            })
            .catch(err => console.log(err));

            document.addEventListener('keypress', (event) => {
                let buttonClicked = event.which || event.keyCode;

                if (buttonClicked === 13) {
                    event.preventDefault();
                    let choice = $("#monsterSearch").val();
        
                    this.monsterSearch(choice);
        
                }
            });

            $.ajax({
                url: "http://dnd5eapi.co/api/monsters/",
                method: "GET",
                dataType: "json",                
                headers: {"Content-Type" : "application/x-www-form-urlencoded"}
              }).then(res => {
                  console.log("fired");
                  console.log(res)
                
                })
    }

    selectMonster = event => {
        console.log(event.target.value);

        var choice = event.target.value;

        let monsterIndex = this.state.searchList.indexOf(choice);

        if(monsterIndex !== -1){
                        
            this.monsterSearch(event.target.value); 
        }
        
    } 

    // handle = event => {
    //     let buttonClicked = event.which || event.keyCode;        

    //     if (buttonClicked === 13) {
    //         event.preventDefault();
    //         let choice = $("#monsterSearch").val();

    //         this.monsterSearch(choice);

    //     }


    // }

    submitSearch = event => {
        event.preventDefault();

        let choice = $("#monsterSearch").val();

        this.monsterSearch(choice);
        
    }

    monsterSearch = choice => {
        let monsterIndex = this.state.searchList.indexOf(choice);

        if (monsterIndex !== -1) {

            API.getMonster(monsterIndex + 1)
                .then(res => {
                    this.setState({
                        searchResults: res.data
                    });
                    console.log(this.state.searchResults);

                    const searchResults = this.state.searchResults;

                    $(".actions").html("");
                    $(".legendaryActions").html("");
                    $(".specialAbilities").html("");

                    for (let i = 0; i < searchResults.actions.length; i++) {

                        $(".actions").append(
                            `                 
                        <p>${searchResults.actions[i].name} </p> 
                        <ul>
                        <li><strong>Attack Bonus</strong>: ${searchResults.actions[i].attack_bonus}</li>
                        <li><strong>Damage Dice</strong>: ${searchResults.actions[i].damage_dice ? searchResults.actions[i].damage_dice : "N/A"}</li>
                        <li><strong>Description</strong>: ${searchResults.actions[i].desc}</li>
                        </ul>
                        `
                        )
                    };


                    for (let i in searchResults.legendary_actions) {

                        $(".legendaryActions").append(
                            `                 
                        <p>${searchResults.legendary_actions[i].name} </p> 
                        <ul>
                        <li><strong>Attack Bonus</strong>: ${searchResults.legendary_actions[i].attack_bonus}</li>
                        <li><strong>Damage Dice</strong>: ${searchResults.legendary_actions[i].damage_dice ? searchResults.actions[i].damage_dice : "N/A"}</li>
                        <li><strong>Description</strong>: ${searchResults.legendary_actions[i].desc}</li>
                        </ul>
                        `
                        )
                    };

                    for (let i in searchResults.special_abilities) {

                        $(".specialAbilities").append(
                            `                 
                        <p>${searchResults.special_abilities[i].name} </p> 
                        <ul>
                        <li><strong>Attack Bonus</strong>: ${searchResults.special_abilities[i].attack_bonus}</li>
                        <li><strong>Damage Dice</strong>: ${searchResults.special_abilities[i].damage_dice ? searchResults.actions[i].damage_dice : "N/A"}</li>
                        <li><strong>Description</strong>: ${searchResults.special_abilities[i].desc}</li>
                        </ul>
                        `
                        )
                    };

                })
                .catch(err => console.log(err));

        } else {
            $(".noResults").html("No Results Found").css({ "color": "red" });
            this.setState({ searchResults: [] });
        }

    }

    render() {
        return (


            <div className="monsterBody">
                <NavBar />
                <h1>Monster Manual</h1>

                <div className="row">

                    <div className="col-md-3">

                        <form>
                            <input list="browsers" name="browser" id="monsterSearch" className="form-control" placeholder="Search Monster Library" onSelect={this.selectMonster.bind(this)}/>
                            <datalist id="browsers">

                                {this.state.searchList.map(monster => <option key={monster} value={monster} />)}

                            </datalist>
                            <center>
                                <a className="btn create-btn" role="button" id="monsterSubmit" onClick={this.submitSearch}>Monsearch</a>
                            </center>
                        </form>

                    </div>
                    <div className="col-md-9">
                        {this.state.searchResults.name ? (

                            <div className="scroll">

                                <div className="row monsterTable">

                                    <div className="col-sm-4">
                                        <strong>Name:</strong> {this.state.searchResults.name}<br />
                                        <strong>Hit Points:</strong> {this.state.searchResults.hit_points}<br />
                                        <strong>Armor Class:</strong> {this.state.searchResults.armor_class}<br />
                                        <strong>Challenge Rating:</strong> {this.state.searchResults.challenge_rating}<br />
                                        <strong>Charisma:</strong> {this.state.searchResults.charisma}<br />
                                        <strong>Constitution:</strong> {this.state.searchResults.constitution}<br />
                                        <strong>Dexterity:</strong> {this.state.searchResults.dexterity}<br />
                                        <strong>Intelligence:</strong> {this.state.searchResults.intelligence}<br />
                                        <strong>Strength:</strong> {this.state.searchResults.strength}<br />
                                        <strong>Wisdom:</strong> {this.state.searchResults.wisdom}<br />
                                        {this.state.searchResults.damage_immunities ? <div><strong>Damage Immunities:</strong> {this.state.searchResults.damage_immunities}<br /></div> : ""}

                                        {this.state.searchResults.damage_resistances ? <div><strong>Damage Resistances:</strong> {this.state.searchResults.damage_resistances}<br /></div> : ""}

                                        {this.state.searchResults.languages ? <div><strong>Languages:</strong> {this.state.searchResults.languages}<br /></div> : ""}

                                        {this.state.searchResults.perception ? <div><strong>Perception:</strong> {this.state.searchResults.perception}<br /></div> : ""}

                                        {this.state.searchResults.senses ? <div><strong>Senses:</strong> {this.state.searchResults.senses}<br /></div> : ""}

                                        {this.state.searchResults.size ? <div><strong>Size:</strong> {this.state.searchResults.size}<br /></div> : ""}

                                        {this.state.searchResults.speed ? <div><strong>Speed:</strong> {this.state.searchResults.speed}<br /></div> : ""}

                                        {this.state.searchResults.type ? <div><strong>Type:</strong> {this.state.searchResults.type}<br /></div> : ""}

                                        {this.state.searchResults.subtype ? <div><strong>Subtype:</strong> {this.state.searchResults.subtype}<br /></div> : ""}

                                        {this.state.searchResults.alignment ? <div><strong>Alignment:</strong> {this.state.searchResults.alignment}</div> : ""}

                                    </div>

                                    <div className="col-sm-8">

                                        <strong>Hit Dice:</strong> {this.state.searchResults.hit_dice}<br />
                                        {this.state.searchResults.condition_immunities ? <div><strong>Conditional Immunities:</strong> {this.state.searchResults.condition_immunities}<br /></div> : ""}
                                        {this.state.searchResults.damage_vulnerabilities ? <div><strong>Damage Vulnerabilities:</strong> {this.state.searchResults.damage_vulnerabilities}<br /></div> : ""}
                                        {this.state.searchResults.constitution_save ? <div><strong>Constitution Save:</strong> {this.state.searchResults.constitution_save}<br /></div> : ""}
                                        {this.state.searchResults.wisdom_save ? <div><strong>Wisdom Save:</strong> {this.state.searchResults.wisdom_save}< br /></div> : ""}
                                        {this.state.searchResults.intelligence_save ? <div><strong>Intelligence Save:</strong> {this.state.searchResults.intelligence_save}<br /></div> : ""}
                                        {this.state.searchResults.dexterity_save ? <div><strong>Dexterity Save:</strong> {this.state.searchResults.dexterity_save}<br /></div> : ""}






                                        <h2>Actions</h2>
                                        <div className="actions"></div>

                                        {this.state.searchResults.legendary_actions ? (
                                            <span>
                                                <h3>Legendary Actions</h3>
                                                <div className="legendaryActions"></div>
                                            </span>
                                        ) : ""

                                        }

                                    </div>

                                    <div className="col-sm-12">


                                        {this.state.searchResults.special_abilities ? (
                                            <span>
                                                <h3>Special Abilities</h3>
                                                <div className="specialAbilities"></div>

                                            </span>
                                        ) : ""}

                                    </div>

                                </div>


                            </div>



                        ) : <div className="col-md-9">

                                <h3 className="noResults">No Search Results Available</h3>

                            </div>}


                    </div>



                </div>
            </div>


        );
    }
}

export default Monsters;