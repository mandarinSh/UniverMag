import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import "../common/Common";
import "../css/Obfuscator.css";

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
      <Form className="deobf">
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label className="obf-title">Text for deobfuscate</Form.Label>
        <Form.Control
          placeholder="empty..."
          value={this.state.inputText}
          onChange={this.handleChange}
          className="text"
        />
        <Button onClick={this.deobfuscateText} className="obf-btn">Deobfuscate</Button>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlOutput">
        <Form.Label className="obf-title">Deobfuscated text</Form.Label>
        <Form.Control placeholder="empty..." value={this.state.outputText} className="text"/>
      </Form.Group>
    </Form>
    )
  }
}

export default Deobfuscator;
