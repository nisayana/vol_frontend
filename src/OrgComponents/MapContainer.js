import React, {useState}  from 'react';
import {withRouter} from 'react-router-dom'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
// import { Search } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';


const MapContainer = (props) => {

  // const [addModalOpen, setAddModalOpen] = React.useState(false);

  // const handleAddClick = () => {
  //   setAddModalOpen(true);
  // };
  // const handleClose = ()=>{
  //   setAddModalOpen(false)
  // }

  console.log(props)

  const Map = () => {
    let [selectedList, setSelectedList] = useState(null)

    console.log(selectedList)

      return (
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{lat: 40.783058, lng: -73.984016}}>
            {props.coordinates.map(coordinate => 
              <Marker
                key={coordinate.id}
                position={{
                  lat: parseFloat(coordinate.lat),
                  lng: parseFloat(coordinate.lng)
                }}
                onClick={() => {
                  setSelectedList(coordinate) 
                }}
              />  
            )}
            {selectedList &&(
                            <InfoWindow
                                position={{
                                    lat: parseFloat(selectedList.lat),
                                    lng: parseFloat(selectedList.lng)
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

  // console.log(Map())

let WrappedMap = withScriptjs(withGoogleMap(Map))

console.log(WrappedMap)

return (
  <div>
    {/* <div id='map_title'>Bringing the options to you </div> */}
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