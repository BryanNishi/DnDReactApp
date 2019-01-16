import React, { Component } from "react";
import NavBar from '../../components/NavBar';
import "./features.css";
import API from '../../utils/API';
import $ from 'jquery';
//import { Button, Form, FormGroup, Label, Input, Row, Col, Jumbotron } from 'reactstrap';

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

        document.addEventListener('keypress', (event) => {
            let buttonClicked = event.which || event.keyCode;

            if (buttonClicked === 13) {
                event.preventDefault();
                let choice = $("#featureSearch").val();

                this.featureSearch(choice);

            }
        });

    }

    // handle = event => {
    //     let buttonClicked = event.which || event.keyCode;        

    //     if (buttonClicked === 13) {
    //         event.preventDefault();
    //         let choice = $("#featureSearch").val();

    //         this.featureSearch(choice);

    //     }
    // }

    selectFeature = event => {
        console.log(event.target.value);

        var choice = event.target.value;

        let featureIndex = this.state.featureList.indexOf(choice);

        if (featureIndex !== -1) {

            this.featureSearch(event.target.value);
        }
    }


    submitSearch = event => {
        event.preventDefault();

        let choice = $("#featureSearch").val();

        this.featureSearch(choice);

    }

    featureSearch = choice => {
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
                <p className="disclaimer">To access Class Search download and active <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en" target="_blank">this Google Extention</a> then <a href="http://stark-spire-22309.herokuapp.com/features">click here</a>.</p>

                {/* <Form>

                    <Row>
                        <Row>
                            <Col md="3">
                                <FormGroup>

                                    <Input list="browsers" name="browser" id="featureSearch" className="form-control" placeholder="Search Feature Library" onSelect={this.selectFeature.bind(this)} />

                                    <datalist id="browsers">

                                        {this.state.featureList.map((feature, index) => <option key={index} value={feature} />)}

                                    </datalist>

                                    <Button onClick={this.submitSearch} >Search</Button>

                                </FormGroup>
                            </Col>

                            <Col md="9">
                            </Col>


                        </Row>
                    </Row>
                </Form> */}

                <div className="row">
                    <div className="col-md-3">
                        <form>

                            <input list="browsers" name="browser" id="featureSearch" className="form-control" placeholder="Search Feature Library" onSelect={this.selectFeature.bind(this)} />

                            <datalist id="browsers">

                                {this.state.featureList.map((feature, index) => <option key={index} value={feature} />)}

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
                                        <strong>Level:</strong> {this.state.searchResults.level ? this.state.searchResults.level : "N/A"}<br />



                                    </div>

                                    <div className="col-sm-8">
                                        <strong>Description:</strong>
                                        {this.state.searchResults.desc.map((desc, index) => <span key={index}> {desc} <br /> </span>)}

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