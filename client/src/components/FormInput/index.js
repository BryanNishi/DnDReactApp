import React from "react";
import { FormGroup, Label, Input } from 'reactstrap';
import "./style.css";

const FormInput = (props) => {
    return (
        <div>
            <FormGroup>
                <Label>{props.label}</Label>
                <Input id={props.inputID} />
            </FormGroup>
        </div>
    )
}

export default FormInput;