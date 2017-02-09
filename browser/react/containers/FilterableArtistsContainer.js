import React from 'react'
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists'

export default class FilterableArtistsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {

    this.setState({ inputValue: event.target.value });
  }

  render() {
    console.log('inputValue in render', this.state.inputValue)
    const filteredArtists = this.props.artists.filter(artist => {
      return artist.name.match(this.state.inputValue);
    });


    return (
      <div>
        <FilterInput handleChange={this.onChange} />
        <Artists artists={filteredArtists} />
      </div>
    )
  }

}
