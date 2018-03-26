import _ from 'lodash';
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

    this.state = {
      videos: [],
      selectedVideo: null

    };

    this.videoSearch('god');
  }

  videoSearch(term){
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]

      });
    });
  }

  render() {
    const searchVideo = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div >
        <SearchBar  onSearchTermChange={ searchVideo}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div >
    );
  }
}

render(<App />, document.getElementById('root'));
