import React, { Component } from 'react';
import Select from './Select';
import Input from './Input';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      voice: 'Jan',
      blobURL: '',
    };
  }

  handleChange = ({ target: { value } }) =>
    this.setState({
      text: value,
    });

  handleSelect = ({ target: { value } }) => this.setState({ voice: value });

  handleSubmit = (e) => {
    if (e.which !== 13 && e.shiftKey) return;
    if (this.state.text === '') e.preventDefault();
    else this.emulator(this.state.voice, this.state.text);
  };

  emulator = async (voice, text) => {
    const mp3 = await (await fetch(this.getLink(voice, text))).blob();
    const blobURL = URL.createObjectURL(mp3);
    this.setState({
      blobURL,
    });
  };

  getLink = (text, voice) => {
    const base = 'https://api.streamelements.com/kappa/v2/';
    return `${base}speech?voice=${voice}&text=${encodeURIComponent(text.trim())}`;
  };

  render() {
    const ttsAudioElement = this.state.blobURL ? <AudioPlayer src={this.state.blobURL} /> : null;

    return (
      <div>
        <main>
          <Input handleSubmit={this.handleSubmit} handleChange={this.handleChange} text={this.state.text} />
          <br />
          <Select handleSelect={this.handleSelect} />
          <br />
          {ttsAudioElement}
        </main>
      </div>
    );
  }
}
