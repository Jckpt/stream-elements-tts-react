import React, { Component } from 'react';
import Select from './Select';
import Input from './Input';
import Audio from './Audio';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import emulator from '../functions/Emulator';
export class Main extends Component {
  state = {
    input: '',
    select: 'Jan',
    blobUrl: '',
  };
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  handleSelect = (e) => {
    this.setState({ select: e.target.value });
  };
  handleSubmit = (e) => {
    if (e.which === 13 && !e.shiftKey) {
      if (this.state.input === '') {
        e.preventDefault();
        console.log('empty textarea');
      } else {
        console.log('dziala');
        this.emulator(this.state.select, this.state.input);
        console.log(this.blobUrl);
      }
    }
  };
  emulator = async (select, input) => {
    // wrzucilem ta funkcje bo jak ja importowalem to nie dzialala i nie wiem jak to naprawic
    let speak = await fetch(`https://api.streamelements.com/kappa/v2/speech?voice=${select}&text=${encodeURIComponent(input.trim())}`);
    let mp3 = await speak.blob();

    let blobUrl = URL.createObjectURL(mp3);
    /*     let audio = document.getElementById('audio');
            audio.pause();
            audio.load();
            audio.play(); */
    console.log(blobUrl);
    this.setState({
      blobUrl: blobUrl,
    });
  };
  render() {
    return (
      <div>
        <main>
          <Input handleSubmit={this.handleSubmit} handleChange={this.handleChange} input={this.state.input} />
          <br />
          <Select handleSelect={this.handleSelect} />
          <br />
          <Audio
            blobUrl={this.state.blobUrl}
            // nie dziala nwm czemu dlatego
          />
          <AudioPlayer
            src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
            // src={this.state.blobUrl} zamiast tego ^
          />
        </main>
      </div>
    );
  }
}

export default Main;
