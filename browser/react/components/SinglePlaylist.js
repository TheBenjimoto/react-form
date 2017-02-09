import React from 'react';
import axios from 'axios';
import {convertSong} from '../utils';
import Songs from './Songs';

export default class SinglePlaylist extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidmount() {
    let playlistId = this.props.routeParams.playlistId;
    this.props.selectPlaylist(playlistId);
  }

  render() {

    return (
      <div>
        <h3>{ this.props.selectedPlaylist.name }</h3>
        <Songs songs={ this.props.selectedPlaylist.songs} /> {/** Hooray for reusability! */}
        { this.props.selectedPlaylist.songs && !this.props.selectedPlaylist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    )
  }

}
