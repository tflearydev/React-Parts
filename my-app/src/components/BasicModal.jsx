import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";

class BasicModal extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.toggle} className="but">Contact Us</Button>
        <Modal open={open} toggle={this.toggle} className="mod">
          <ModalHeader><span role="img">👋</span> Hello there! Shoot us a quick email for questions.</ModalHeader>
          <ModalBody className="email">quickhelp@upart.com</ModalBody>
        </Modal>
      </div>
    );
  }
}

export default BasicModal;