import React, { Component } from 'react';
import logo from '../images/streamlabs.png';
export class Head extends Component {
  render() {
    return (
      <header>
        Symulator{' '}
        <span id='ttv_logo'>
          <img src={logo} alt='' />
        </span>{' '}
        Text-to-Speech
      </header>
    );
  }
}

export default Head;
