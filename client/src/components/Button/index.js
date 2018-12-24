import React from "react";
import { Button } from 'reactstrap';
import "./button.css";

const button = (props) => {
    return (
        <div>
            <Button href={props.href}>
                <p>{props.name}</p>
            </Button>
        </div>
    )
}

export default button;