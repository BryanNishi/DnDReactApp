import React, { Component } from 'react';
import API from "../../utils/API";
import './InnModal.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class InnModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  generate = event => {
    event.preventDefault();
   {
        API.loadInn()
            .then(res => this.loadInn({inns: res.data}))
            .catch(err => console.log(err));
    }
    console.log(this.state)
};

 
  render() {
    return (
      <div>
        <Button className="btn" onClick={this.toggle}>Inn Name Generator</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="modalHeader" toggle={this.toggle}><h2>Inn Name Generator</h2></ModalHeader>
          <ModalBody className="modalBody" id="innGenResult">
          </ModalBody>
         
                    
          <ModalFooter className="modalFooter">
            <Button className="btn" onClick={this.generate}>Generate</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default InnModal;