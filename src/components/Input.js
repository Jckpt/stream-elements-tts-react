import React, { Component } from 'react';

export class Input extends Component {
  handleDefault = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
    }
  };
  render() {
    return (
      <React.Fragment>
        <textarea
          value={this.props.input}
          placeholder='Siema'
          rows='20'
          id='text'
          cols='40'
          className='ui-autocomplete-input'
          autoComplete='off'
          aria-autocomplete='list'
          aria-haspopup='true'
          onChange={this.props.handleChange}
          onKeyUp={this.props.handleSubmit}
          onKeyDown={this.handleDefault}></textarea>
      </React.Fragment>
    );
  }
}

export default Input;
