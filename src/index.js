import React from 'react';
import { render } from 'react-dom';
import SearchBar from './search_bar';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <SearchBar />
  </div>
);

render(<App />, document.getElementById('root'));
