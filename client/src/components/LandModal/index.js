import React from 'react';
import './LandModal.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class LandModal extends React.Component {
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

  render() {
    return (
      <div>
        <Button className="btn" onClick={this.toggle}>Land Name Generator</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="modalHeader" toggle={this.toggle}><h2>Land Name Generator</h2></ModalHeader>
          <ModalBody className="modalBody" id="landGenResult">
          </ModalBody>
          <ModalFooter className="modalFooter">
            <Button className="btn" onClick={this.toggle}>Generate</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LandModal;