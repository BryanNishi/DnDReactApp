import React, { Component } from "react";
import NavBar from '../../components/NavBar';
import "./classes.css";
import API from '../../utils/API';
import $ from 'jquery';

class Classes extends Component {

    state = {
        classList: [],
        searchResults: [],
        startingEquipment: []
    }

    componentDidMount() {
        API.getClass("")
            .then(res => {
                this.setState({ classList: res.data.results.map(i => i.name) })
            })
            .catch(err => console.log(err));

            document.addEventListener('keypress', (event) => {
                let buttonClicked = event.which || event.keyCode;
    
                if (buttonClicked === 13) {
                    event.preventDefault();
                    let choice = $("#classSearch").val();
        
                    this.classSearch(choice);
        
                }
            });

    }

    // handle = event => {
    //     let buttonClicked = event.which || event.keyCode;        

    //     if (buttonClicked === 13) {
    //         event.preventDefault();
    //         let choice = $("#classSearch").val();

    //        this.classSearch(choice);

    //     }
    // }

    selectClass = event => {
        console.log(event.target.value);       

        var choice = event.target.value;

        let classIndex = this.state.classList.indexOf(choice);

        if(classIndex !== -1){
                        
            this.classSearch(event.target.value); 
        }
    }


    submitSearch = event => {
        event.preventDefault();

        let choice = $("#classSearch").val();

        this.classSearch(choice);       

    }

    classSearch = choice => {
        console.log(choice);

        console.log(this.state.classList.indexOf(choice));

        let classIndex = this.state.classList.indexOf(choice);

        if (classIndex !== -1) {


            API.getClass(classIndex + 1)
                .then(res => {

                    this.setState({
                        searchResults: res.data
                    });

                    console.log(this.state.searchResults);

                });

            API.getStartingEquipment(classIndex + 1)
            .then(res => {
                
                this.setState({ startingEquipment: res.data })
            })
            .catch(err => console.log(err))    


        } else {
            $("#noResults").html("No Results Found").css({ "color": "red" });
            this.setState({ 
                searchResults: [],
                startingEquipment: []
             });

        }

    }

    render() {
        return (
            <div className="classesBody">
                <NavBar />

                <h1>Class Search</h1>
                <div className="row">
                    <div className="col-md-3">
                        <form>

                            <input list="browsers" name="browser" id="classSearch" className="form-control" placeholder="Search Class Library" onSelect={this.selectClass.bind(this)} />

                            <datalist id="browsers">

                                {this.state.classList.map((classes, index) => <option key={index} value={classes} />)}

                            </datalist>
                            <center>
                                <a className="btn create-btn" role="button" id="classesSubmit" onClick={this.submitSearch}>Search</a>
                            </center>
                        </form>

                    </div>

                    <div className="col-md-9">
                        {this.state.searchResults.name ? (
                            <div className="scroll">


                                <div className="row classesTable">
                                    <div className="col-sm-6">

                                        <strong>Name:</strong> {this.state.searchResults.name}<br />
                                        <strong>Hit Dice:</strong> {this.state.searchResults.hit_die}<br />
                                        
                                        <strong>Proficiencies:</strong>
                                        <ul>
                                            {this.state.searchResults.proficiencies.map(proficiency => <li key={proficiency.name}>{proficiency.name}</li>)}
                                        </ul>                                      
                                        <strong>Skill Proficiencies:</strong><br/>
                                        Choose {this.state.searchResults.proficiency_choices[0].choose} of the following
                                        <ul>
                                            {this.state.searchResults.proficiency_choices[0].from.map(pro => <li key={pro.name}>{pro.name}</li>)}
                                        </ul>

                                        <strong>Subclass:</strong> {this.state.searchResults.subclasses[0].name}


                                    </div>

                                    <div className="col-sm-6">
                                    
                                        {this.state.startingEquipment.starting_equipment[0] ? (<strong>Starter Pack:</strong>) : ""}
                                        <ul>
                                        {this.state.startingEquipment.starting_equipment.map(starter => <li key={starter.item.name}>{starter.item.name} (x{starter.quantity})</li>)}
                                        </ul>  

                                        {/* <strong>Starter Pack Choices:</strong><br/>
                                        Choice 1: 
                                        (Choose only {this.state.startingEquipment.choice_1[0].choose}):
                                        <ul>
                                        {this.state.startingEquipment.choice_1.map(choice => <li key={choice.from[0].item.name}>{choice.from[0].item.name} (x{choice.from[0].quantity})</li>)}
                                        </ul>                                      */}
                                        
                                    </div>                                    


                                </div>
                                

                            </div>

                        ) : <div>
                                <h3 id="noResults">No Search Results Available</h3>
                            </div>

                        }

                    </div>


                </div>









            </div>
        )
    }
}

export default Classes;