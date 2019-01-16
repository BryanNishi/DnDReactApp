import React from "react";
import ReactToPrint from "react-to-print";
import ExportData from '../../components/ExportData';

class ComponentToPrint extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
       
        return (
            <ExportData {...this.props.dataToPrint}/>
        )
    }
}

class Example extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
   
        return (
            <div>
                <ReactToPrint
                    trigger={() => <a href="#">Print this out!</a>}
                    content={() => this.props}
                />
                <ComponentToPrint ref={el => (this.props = el)} dataToPrint={this.props} />
            </div>
        );
    }
}

export default Example;
