import React, {useState}  from 'react';
import {withRouter} from 'react-router-dom'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
// import { Search } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

const mapStyles = {
  position: 'absolute',
  marginTop: '0%',
  marginLeft: '0%',
  width: '100%',
  height: '100%',
  borderRadius: "5px"
};


const MapContainer = (props) => {

  // const [addModalOpen, setAddModalOpen] = React.useState(false);

  // const handleAddClick = () => {
  //   setAddModalOpen(true);
  // };
  // const handleClose = ()=>{
  //   setAddModalOpen(false)
  // }


  const Map = () => {
    let [selectedList, setSelectedList] = useState(null)
      return (
        <GoogleMap
          defaultZoom={14}
          defaultCenter={{lat: 40.783058, lng: -73.984016}}>
            {props.lists.map(list => 
              <Marker
                key={list.id}
                position={{
                  lat: parseInt(list.lat),
                  lng: parseInt(list.lng)
                }}
                onClick={() => {
                  setSelectedList(list)
                }}
              />  
            )}
            {selectedList &&(
                            <InfoWindow
                                position={{
                                    lat: parseInt(selectedList.lat),
                                    lng: parseInt(selectedList.lng)
                                }}
                                onCloseClick={() => {
                                    setSelectedList(null);
                                }}>
                                <div>
                                    <div id='rstName_on_map'
                                        onClick={() => {
                                            console.log("hello")
                                            // props.history.push(`/restaurants/${selectedRestaurant.id}`)
                                        }}>
                                        {selectedList.name}
                                    </div>
                                    {/* <p>{selectedRestaurant.cuisines}</p>
                                    <p>{selectedRestaurant.phone_number}</p>
                                    <p>{selectedRestaurant.address}</p>
                                    <p>{selectedRestaurant.user_rating_text} with {selectedRestaurant.user_rating} <Icon name='star' /> </p> */}

                                </div>
                            </InfoWindow>
                        )}
        </GoogleMap>
      )
  }

  console.log(Map())

let WrappedMap = withScriptjs(withGoogleMap(Map))

return (
  <div>
    <div id='map_title'>Bringing the options to you </div>
        <div style={{margin: '5%', width: '90vw', height: '100vh'}}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing.places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
            loadingElement={<div style={{height: "100%"}} />} 
            containerElement={<div style={{height: "100%"}} />} 
            mapElement={<div style={{height: "100%"}} />} 
          />
        </div>
    </div>
  )
}

export default withRouter(MapContainer);