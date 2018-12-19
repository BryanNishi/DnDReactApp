import React, { Component } from "react";
import NavBar from '../../components/NavBar';
import "./spells.css";
import API from '../../utils/API';
import $ from 'jquery';

class Spell extends Component {

    state = {
        searchList: [],
        searchNumber: "",
        searchResult: [],
        casting_time: "",
        classes: "",
        components: "",
        duration: "",
        level: "",
        name: "",
        page: "",
        range: "",
        ritual: "",
        school: "",
        subclasses: ""
    }

    componentDidMount() {
        API.getSpell("")
            .then(res => {
                this.setState({ searchList: res.data.results });

            })
            .catch(err => console.log(err));
    }

    submitSearch = event => {
        event.preventDefault();

        if ($("#spellSearch").val() > 0 && $("#spellSearch").val() < 320) {

            let choice = $("#spellSearch").val().toString();

            console.log(choice);

            API.getSpell(choice)
                .then(res => {
                    console.log(res.data);
                    let results = res.data;

                    this.setState({
                        searchResult: res.data,
                        casting_time: results.casting_time,
                        classes: results.classes.map(value => value.name).join(", "),
                        components: results.components.join(", "),
                        desc: results.desc.join(" "),
                        duration: results.duration,
                        level: results.level,
                        name: results.name,
                        page: results.page,
                        range: results.range,
                        ritual: results.ritual,
                        school: results.school.name,
                        subclasses: results.subclasses.length ? results.subclasses.map(value => value.name).join(", ") : "N/A"
                    })

                });

        } else {
            $("#noResults").text("No Results Found").css({ "color": "red" });

        }
    }





    render() {
        return (
            <div className="spellBody">
                <NavBar />

                <h1>SpellBook</h1>
                <form>

                    <input list="browsers" name="browser" id="spellSearch" className="form-control" placeholder="Search Spell Library" />

                    <datalist id="browsers">

                        {this.state.searchList.map((spell, index) => <option key={index + 1} value={index + 1}>{spell.name}</option>)}

                    </datalist>
                    <center>
                        <a href="#" class="btn create-btn" role="button" id="spellSubmit" onClick={this.submitSearch}>Scroogle</a>
                    </center>
                </form>

                {this.state.name ? (
                    <div className="scroll">


                        <strong>Name:</strong> {this.state.name}
                        <br />
                        <strong>Level:</strong> {this.state.level}
                        <br />
                        <strong>Range:</strong> {this.state.range}
                        <br />
                        <strong>Casting Time:</strong> {this.state.casting_time}
                        <br />
                        <strong>Ritual:</strong> {this.state.ritual}
                        <br />
                        <strong>Description:</strong> {this.state.desc}
                        <br />
                        <strong>Components:</strong> {this.state.components}
                        <br />
                        <strong>Page:</strong> {this.state.page}
                        <br />
                        <strong>Classes:</strong> {this.state.classes}
                        <br />
                        <strong>School:</strong> {this.state.school}
                        <br />
                        <strong>Subclasses:</strong> {this.state.subclasses}
                    </div>

                ) : <h3 id="noResults">No Search Results Availible</h3>

                }




            </div>
        )
    }
}





export default Spell;