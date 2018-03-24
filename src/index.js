import React, { Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
const API_KEY = 'AIzaSyAwmDlW8puXpMvfRRrH-5Cg-5V9gB9dWZc';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends Component {
  constructor(props) {
    super(props); 

    this.state = { videos: [] };
    
    YTSearch ( { key: API_KEY, term: 'spirit' }, (videos) => {this.setState({ videos });}    );
  }

  render() {
    return (
      <div style={styles} >
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div >
    );
  }
}

render(<App />, document.getElementById('root'));
