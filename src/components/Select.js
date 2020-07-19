import React, { Component } from 'react';

export class Select extends Component {
  render() {
    return (
      <React.Fragment>
        <select id='voice_select' value={this.props.select} onChange={this.props.handleSelect}>
          <option value='Jan'>Jan</option>
          <option value='Jacek'>Jacek</option>
          <option value='Ewa'>Ewa</option>
          <option value='Maja'>Maja</option>
          <option value='pl-PL-Wavenet-A'>Amelia</option>
          <option value='pl-PL-Wavenet-B'>Stanislaw</option>
          <option value='pl-PL-Wavenet-C'>Tomasz</option>
          <option value='pl-PL-Wavenet-D'>Klaudia</option>
          <option value='Brian'>Brian</option>
        </select>
      </React.Fragment>
    );
  }
}

export default Select;
