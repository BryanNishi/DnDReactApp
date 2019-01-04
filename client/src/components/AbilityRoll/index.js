import React from "react";
import { Jumbotron } from 'reactstrap';
import "./style.css";

const AbilityRoll = (props) => {
    return (
        <Jumbotron>
            {/* <select
                    className="InputElement"
                  
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>

                    ))}

                </select> */}

        </Jumbotron>
    )
}

export default AbilityRoll;