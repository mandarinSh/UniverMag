import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";

class Deobfuscator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      outputText: ''
    }
  }

  deobfuscateText = () => {
    this.setState({outputText: this.state.inputText.toString().deobfs(100)});
  };

  handleChange = (e) => {
    this.setState({inputText: e.target.value})
  };

  render() {
    return (
      <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Text for deobfuscate</Form.Label>
        <Form.Control placeholder="empty..." value={this.state.inputText} onChange={this.handleChange}/>
        <Button onClick={this.deobfuscateText}>Deobfuscate</Button>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlOutput">
        <Form.Label>Deobfuscated text</Form.Label>
        <Form.Control placeholder="empty..." value={this.state.outputText}/>
      </Form.Group>
    </Form>
    )
  }
}

export default Deobfuscator;
