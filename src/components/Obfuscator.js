import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";

class Obfuscator extends Component {

  constructor(props) {
    super(props);

  }

  obfuscateText = () => {

  };

  render() {
    return <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Text for obfuscate</Form.Label>
        <Form.Control placeholder="empty..." />
      </Form.Group>
      <Button onClick={this.obfuscateText}>Obfuscate</Button>
    </Form>;
  }
}

export default Obfuscator;
