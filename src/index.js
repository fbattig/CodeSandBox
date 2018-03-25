import React, { Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
const API_KEY = 'AIzaSyAwmDlW8puXpMvfRRrH-5Cg-5V9gB9dWZc';



class App extends Component {
  constructor(props) {
    super(props); 

    this.state = { videos: [] };
    
    YTSearch ( { key: API_KEY, term: 'react' }, (videos) => {this.setState({ videos });}    );
  }

  render() {
    return (
      <div >
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div >
    );
  }
}

render(<App />, document.getElementById('root'));
