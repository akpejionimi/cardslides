import React, { Component } from 'react';
import Testimonial from './component/Testimonial/Testinmonial.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Marks</h1>
        <Testimonial/>
      </div>
    );
  }
}

export default App;
