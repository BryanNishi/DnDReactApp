import React, { Component } from "react";
import "./BasicCC.css";
import { Button, Form, FormGroup, Label, Input, Row, Col, Jumbotron } from 'reactstrap';



class Basic extends Component {

    render() {
        return (
            <div>
                <h1>Guided Character Creator</h1>
                <Row>
                    <Col md={{ size: 10, offset: 2 }}>
                    <Jumbotron id="guided">
                        Creation guide here
                    </Jumbotron>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Basic;