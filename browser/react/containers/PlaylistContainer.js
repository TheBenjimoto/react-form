import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

class PlaylistContainer extends React.Component {
  constructor(props) {
    super(props);
    this.playlistTitleChange = this.playlistTitleChange.bind(this);
    this.playlistTitleSubmit = this.playlistTitleSubmit.bind(this);

    this.state = {
      inputValue: ''
    }
  }

  playlistTitleChange(event) {
    this.setState({ inputValue: event.target.value })
    console.log(this.state.inputValue)
  }

  playlistTitleSubmit(event) {
    console.log('submit', this.state.inputValue);
    event.preventDefault();
    this.props.createPlaylist(this.state.inputValue);

  }


  render() {
    return (
      <NewPlaylist
        inputValue={this.state.inputValue}
        playlistTitleChange={this.playlistTitleChange}
        playlistTitleSubmit={this.playlistTitleSubmit} />
    )
  }
}

export default PlaylistContainer;
