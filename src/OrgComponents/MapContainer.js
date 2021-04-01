import React, {Component} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'                         
import mapStyles from './mapStyles'

class MapContainer extends Component{
    
    state = {myMarkers: [
    {latitude: 40.710992, longitude: -74.008292},   
    {latitude: 40.792917, longitude: -73.969497},
    {latitude:  40.710992, longitude: -74.008292}]
    }

    displayMarkers = () => {      
        return this.state.myMarkers.map((mark, index) => {                
            return <Marker id={index}  position={{                            
                lat: mark.latitude,                                              
                lng: mark.longitude                                                
            }
        } 

    onClick={() => console.log("You clicked me!",{index})} />          
    })
    }
    
    render() {
        return (
        <div style={{
            position: "relative",
            width: "50%",
            height: "1100px"}} 
            className="map">
            <Map google={this.props.google} 
            zoom={13}
            styles={mapStyles.styles}
            initialCenter={{ lat: 40.7812, lng: -73.9665}}
            disableDefaultUI= {true}>
            {this.displayMarkers()}</Map>
        </div>
        );
    }}

    export default GoogleApiWrapper({
        apiKey: 'AIzaSyAK_Z3sjIKcpze4PdXH7VVK8tH0k4_AgQ4'
    })(MapContainer)