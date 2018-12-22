import React from 'react';
import './NameModal.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class NameModal extends React.Component {
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
        <Button className="btn" onClick={this.toggle}>Name Generator</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="modalHeader" toggle={this.toggle}><h2>Name Generator</h2></ModalHeader>
          <ModalBody className="modalBody">
            <Form>
              <FormGroup>
                <Label for="nameRace"><h2>Race</h2></Label>
                <Input type="select" name="select" id="nameRace">
                  <option value="Random" Selected>Random</option>
                  <option value="Dragonborn">Dragonborn</option>
                  <option value="Dwarf">Dwarf</option>
                  <option value="Elf">Elf</option>
                  <option value="Gnome">Gnome</option>
                  <option value="Half-Elf">Half-Elf</option>
                  <option value="Half-Orc">Half-Orc</option>
                  <option value="Halfling">Halfling</option>
                  <option value="Human">Human</option>
                  <option value="Tiefling">Tiefling</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="nameGender"><h2>Gender</h2></Label>
                <Input type="select" name="select" id="nameGender">
                  <option value="Random" Selected>Random</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Input>
              </FormGroup>
            </Form>
            <div id="nameGenResult"></div>
          </ModalBody>
          <ModalFooter className="modalFooter">
            <Button className="btn" onClick={this.toggle}>Generate</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NameModal;