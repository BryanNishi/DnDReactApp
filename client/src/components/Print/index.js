import React from "react";
import ReactToPrint from "react-to-print";


class ComponentToPrint extends React.Component {
    render() {
        // console.log("options", props.optionsData)
        // console.log("abilities", props.abilitiesData)
        // console.log("equipment", props.equipmentData)
        return (
            <table className="characterDisplay">
                <thead>
                    <th >Character Info</th>
                    <th >Abilities</th>
                    <th >Equipment</th>
                </thead>
                <tbody>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                    </tr>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                    </tr>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

class PrintSheet extends React.Component {
    render() {

        return (
            <jumbotron>
                <ReactToPrint
                    trigger={() => <a href="#">Print Character Sheet</a>}
                    content={() => this.componentRef}
                />
                <ComponentToPrint ref={el => (this.componentRef = el)}
                    // optionsData={props.optionsData}
                    // abilitiesData={props.abilitiesData}
                    // equipmentData={props.equipmentData}
                     />
            </jumbotron>
        );
    }
}


export default PrintSheet;