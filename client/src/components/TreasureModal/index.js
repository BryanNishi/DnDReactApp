import React from 'react';
import './TreasureModal.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class TreasureModal extends React.Component {
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
        <Button className="btn" onClick={this.toggle}>Treasure Generator</Button>
        <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="modalHeader" toggle={this.toggle}><h2>Treasure Generator</h2></ModalHeader>
          <ModalBody className="modalBody" id="treasureGenResult">
          </ModalBody>
          <ModalFooter className="modalFooter">
            <Button className="btn" onClick={this.toggle}>Generate</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TreasureModal;