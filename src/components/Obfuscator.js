import React, {Component} from 'react';
import cloneDeep from 'lodash';
import {Button, Form} from "react-bootstrap";

class Obfuscator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      outputText: 'skdfhkjfsdkl'
    }
  }

  obfuscateText = (e) => {
    this.setState({outputText: this.state.inputText});
  };

  handleChange = (e) => {
    this.setState({inputText: e.target.value})
  };

  render() {
    let inputText = '';
    return (
      <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Text for obfuscate</Form.Label>
        <Form.Control placeholder="empty..." value={this.state.inputText} onChange={this.handleChange}/>
        <Button onClick={this.obfuscateText}>Obfuscate</Button>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlOutput">
        <Form.Label>Obfuscated text</Form.Label>
        <Form.Control placeholder="empty..." value={this.state.outputText}/>
      </Form.Group>
    </Form>
    )
  }
}

export default Obfuscator;
