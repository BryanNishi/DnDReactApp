import React, { Component } from "react";
import NavBar from '../../components/NavBar';
import "./features.css";
import API from '../../utils/API';
import $ from 'jquery';

class Feature extends Component {

    state = {               
        featureList: [],
        searchResults: []        
    }

    componentDidMount() {
        API.getfeature("")
        .then(res => {
            this.setState({ featureList: res.data.results.map(feature => feature.name) })
        })
        .catch(err => console.log(err));

    }
       

    submitSearch = event => {
        event.preventDefault();

        let choice = $("#featureSearch").val();

        console.log(choice);

        console.log(this.state.featureList.indexOf(choice));

        let featureIndex = this.state.featureList.indexOf(choice);

        if (featureIndex !== -1) {



            API.getfeature(featureIndex + 1)
                .then(res => {

                    this.setState({                        
                        searchResults: res.data
                    });

                    console.log(this.state.searchResults);

                });


        } else {
            $("#noResults").html("No Results Found").css({ "color": "red" });
            this.setState({ searchResults: [] });

        }

    }

    render() {
        return (
            <div className="featureBody">
                <NavBar />

                <h1>Feature Search</h1>
                <div className="row">
                    <div className="col-md-3">
                        <form>

                            <input list="browsers" name="browser" id="featureSearch" className="form-control" placeholder="Search Feature Library" />

                            <datalist id="browsers">

                                {this.state.featureList.map((feature,index) => <option key={index} value={feature} />)}

                            </datalist>
                            <center>
                                <a className="btn create-btn" role="button" id="featureSubmit" onClick={this.submitSearch}>Search</a>
                            </center>
                        </form>

                    </div>

                    <div className="col-md-9">
                        {this.state.searchResults.name ? (
                            <div className="scroll">


                                <div className="row spellTable">
                                    <div className="col-sm-4">

                                        <strong>Name:</strong> {this.state.searchResults.name}<br />
                                        <strong>Level:</strong> {this.state.searchResults.level ? this.state.searchResults.level : "N/A" }<br />

                                        

                                    </div>

                                    <div className="col-sm-8">
                                        <strong>Description:</strong>
                                        {this.state.searchResults.desc.map(desc => <span> {desc} <br/> </span>)}

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

export default Feature;