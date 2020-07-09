import React from 'react';
import { requestCoords } from '../redux/actions';
import { connect } from 'react-redux';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            polygonActive: false
        };
    }

loadMapScript = () => {
    const mapId = document.getElementById(this.props.id);
    const map = new window.google.maps.Map(mapId, {
        center: {lat: 53.904303, lng: 27.543319},
        zoom: 5,
        mapTypeId: 'roadmap',
    });  
    const locations = this.props.locations;
    const mapLatLngBounds = new window.google.maps.LatLngBounds(); 
    const markerIco = {
        url: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678085-house-512.png",
        scaledSize: new window.google.maps.Size(40, 40)
    };
    const markers = locations.map((location) => {
        mapLatLngBounds.extend(location);
        const marker = new window.google.maps.Marker({
            position: location,
            map: map,
            icon: markerIco
        });
        marker.addListener('mouseover', () => {marker.setAnimation(window.google.maps.Animation.BOUNCE)});
        marker.addListener('mouseout', () => {marker.setAnimation(null);})
        return marker
    });
    new window.MarkerClusterer(map, markers, {
        imagePath: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/packages/markerclustererplus/images/m'
    });
    map.setCenter(mapLatLngBounds.getCenter());
    map.fitBounds(mapLatLngBounds);
    if(this.props.polygonCoords){
        const polygon = new window.google.maps.Polygon({
            paths: this.props.polygonCoords,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: "#FF0000",
            fillOpacity: 0.35
        });
        polygon.setMap(map);
    };
};

updatePolygon = () => {
    this.setState(function(state) {
        return {
            polygonActive: !state.polygonActive
        }
    }, ()=>{
        this.props.requestCoords(this.state.polygonActive)
        this.loadMapScript()
    })
    
};

componentDidMount() {
    this.props.requestCoords(this.state.polygonActive);
    const script = document.createElement('script');
    const API_KEY = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', () => {
      this.loadMapScript();
    });
    document.body.appendChild(script);
};

render() {
    return (
        <div className="mapWrap">
            <div id={this.props.id}/>
            <div className="controll">
                <button>
                    Remove polygon
                </button>
                <button onClick={() => {this.updatePolygon()}}>
                    Show polygon
                </button>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        locations: state.coords.locations,
        polygonCoords: state.coords.polygonCoords
    }
}

const mapDispatchToProps = {
    requestCoords
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
