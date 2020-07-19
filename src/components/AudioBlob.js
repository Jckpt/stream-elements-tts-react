import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
export class AudioBlob extends Component {
  render() {
    return (
      <div>
        <AudioPlayer
          src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
          // Try other props!
        />
        <audio id='audio' controls=''>
          <source id='source' type='audio/wav' src={this.props.blobUrl} />
        </audio>
      </div>
    );
  }
}

export default AudioPlayer;
