import React, { Component } from 'react';
import AudioBlob from './AudioBlob';
export class Audio extends Component {
  // nie uzywam tego bo nie wyswietlal sie wogole <audio></audio> tag z pliku AudioBlob nwm czemu ¯\_(ツ)_/¯
  // dlatego uzywam jakiegos react-h5-audio-player
  // a i react-h5-audio-player nie dziala nwm czemu jak nie jest w glownym pliku Main.js
  render() {
    return (
      <React.Fragment>
        <AudioBlob blobUrl={this.props.blobUrl} />
      </React.Fragment>
    );
  }
}

export default Audio;
