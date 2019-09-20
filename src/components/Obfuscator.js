import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import "../common/Common";
import "../css/Obfuscator.css";

class Obfuscator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      outputText: ''
    }
  }

  obfuscateText = () => {
    this.setState({outputText: this.state.inputText.toString().obfs(100)});
  };

  handleChange = (e) => {
    this.setState({inputText: e.target.value})
  };

  render() {
    return (
      <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label className="obf-title">Text for obfuscate</Form.Label>
        <Form.Control
          placeholder="empty..."
          value={this.state.inputText}
          onChange={this.handleChange}
          className="text"
        />
        <Button onClick={this.obfuscateText} className="obf-btn">Obfuscate</Button>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlOutput">
        <Form.Label className="obf-title">Obfuscated text</Form.Label>
        <Form.Control placeholder="empty..." value={this.state.outputText} className="obf-text"/>
      </Form.Group>
    </Form>
    )
  }
}

export default Obfuscator;
