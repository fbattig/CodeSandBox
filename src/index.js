import React, { Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
const API_KEY = 'AIzaSyAwmDlW8puXpMvfRRrH-5Cg-5V9gB9dWZd';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends Component {
  constructor(props) {
    super(props); 

    this.state = { videos: [] };
    
    YTSearch
    ( { key: API_KEY, term: 'surfboards' }, 
      (videos) => {this.setstate({ videos });}
    );
  }

  render() {
    return (
      <div style={styles} >
        <SearchBar />
      </div >
    );
  }
}

render(<App />, document.getElementById('root'));
