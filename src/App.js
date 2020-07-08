import React from 'react';
import Map from './components/Map';
import { showPolygon, hidePolygon } from './redux/actions';
import { connect } from 'react-redux';
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
        <div>
          <button onClick={() => this.props.hidePolygon()}>
            Remove polygon
          </button>
          <button onClick={() => this.props.showPolygon()}>
            Show polygon
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  showPolygon,
  hidePolygon
}

export default connect(null, mapDispatchToProps)(App);
