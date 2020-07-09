import React from 'react';
import Map from './components/Map';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Map
          id="map"
        />
      </div>
    );
  }
}

export default App;
