import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Obfuscator from "./components/Obfuscator";
import logo from './logo.svg';
import './App.css';
import Deobfuscator from "./components/Deobfuscator";

function App() {
  return (
    <div className="App">
      <Obfuscator/>
      <Deobfuscator/>
    </div>
  );
}

export default App;
