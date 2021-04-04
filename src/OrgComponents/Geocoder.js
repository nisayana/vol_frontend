import React from 'react';

const geocoder = require('geocoder')

const api = process.env.REACT_APP_GOOGLE_API_KEY

const Geocoder = () => {
    geocoder.geocode("Atlanta, GA", function ( err, api ) {
        console.log(api)
      });
}



// const INITIAL_LOCATION = {
//     address: 'London, United Kingdom',
//     position: {
//       latitude: 51.5085300,
//       longitude: -0.1257400
//     }
//   };
  
//   const INITIAL_MAP_ZOOM_LEVEL = 8;
  
//   const ATLANTIC_OCEAN = {
//     latitude: 29.532804,
//     longitude: -55.491477
//   };
  
//   const Geocoder = () => ({  
//     getInitialState: function () {
//       return {
//         isGeocodingError: false,
//         foundAddress: INITIAL_LOCATION.address
//       };
//     },
  
//     geocodeAddress: function (address) {
//       this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {
  
//         if (status === window.google.maps.GeocoderStatus.OK) {
  
//           this.setState({
//             foundAddress: results[0].formatted_address,
//             isGeocodingError: false
//           });
  
//           this.map.setCenter(results[0].geometry.location);
//           this.marker.setPosition(results[0].geometry.location);
  
//           return;
//         }
  
//         this.setState({
//           foundAddress: null,
//           isGeocodingError: true
//         });
  
//         this.map.setCenter({
//           lat: ATLANTIC_OCEAN.latitude,
//           lng: ATLANTIC_OCEAN.longitude
//         });
  
//         this.marker.setPosition({
//           lat: ATLANTIC_OCEAN.latitude,
//           lng: ATLANTIC_OCEAN.longitude
//         });
  
//       }.bind(this));
//     },
  
//     handleFormSubmit: function (submitEvent) {
//       submitEvent.preventDefault();
  
//       const address = this.searchInputElement.value;
  
//       this.geocodeAddress(address);
//     },
  
//     componentDidMount: function () {
//       const mapElement = this.mapElement;
      
//       this.map = new window.google.maps.Map(mapElement, {
//         zoom: INITIAL_MAP_ZOOM_LEVEL,
//         center: {
//           lat: INITIAL_LOCATION.position.latitude,
//           lng: INITIAL_LOCATION.position.longitude
//         }
//       });
  
//       this.marker = new window.google.maps.Marker({
//         map: this.map,
//         position: {
//           lat: INITIAL_LOCATION.position.latitude,
//           lng: INITIAL_LOCATION.position.longitude
//         }
//       });
  
//       this.geocoder = new window.google.maps.Geocoder();
//     },
  
//     setSearchInputElementReference: function (inputReference) {
//       this.searchInputElement = inputReference;
//     },
  
//     setMapElementReference: function (mapElementReference) {
//       this.mapElement = mapElementReference;
//     },
  
//     render: function () {
//       return (
//         <div className="container">
  
//           <div className="row">
//             <div className="col-sm-12">
  
//               <form className="form-inline" onSubmit={this.handleFormSubmit}>
//                 <div className="row">
//                   <div className="col-xs-8 col-sm-10">
  
//                     <div className="form-group">
//                       <label className="sr-only" htmlFor="address">Address</label>
//                       <input type="text" className="form-control input-lg" id="address" placeholder="London, United Kingdom" ref={this.setSearchInputElementReference} required />
//                     </div>
  
//                   </div>
//                   <div className="col-xs-4 col-sm-2">
  
//                     <button type="submit" className="btn btn-default btn-lg">
//                       <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
//                     </button>
  
//                   </div>
//                 </div>
//               </form>
  
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-sm-12">
  
//               {this.state.isGeocodingError ? <p className="bg-danger">Address not found.</p> : <p className="bg-info">{this.state.foundAddress}</p>}
  
//               <div className="map" ref={this.setMapElementReference}></div>
              
//             </div>
//           </div>
//         </div>
//       );
//     }
//   });

  export default Geocoder;

// const Geocoder = () {

//     function initMap() {
//         const map = new google.maps.Map(document.getElementById("map"), {
//           zoom: 8,
//           center: {
//             lat: -34.397,
//             lng: 150.644
//           },
//         });
//         const geocoder = new google.maps.Geocoder();
//         document.getElementById("submit").addEventListener("click", () => {
//           geocodeAddress(geocoder, map);
//         });
//       }
      
//       function geocodeAddress(geocoder, resultsMap) {
//         const address = document.getElementById("address").value;
//         geocoder.geocode({
//           address: address
//         }, (results, status) => {
//           if (status === "OK") {
//             resultsMap.setCenter(results[0].geometry.location);
//             new google.maps.Marker({
//               map: resultsMap,
//               position: results[0].geometry.location,
//             });
//           } else {
//             alert("Geocode was not successful for the following reason: " + status);
//           }
//         });
//       }      
// }

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Geocoding Service</title>
//     <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
//     <!-- jsFiddle will insert css and js -->
//   </head>
//   <body>
//     <div id="floating-panel">
//       <input id="address" type="textbox" value="Sydney, NSW" />
//       <input id="submit" type="button" value="Geocode" />
//     </div>
//     <div id="map"></div>

//     <!-- Async script executes immediately and must be after any DOM elements used in callback. -->
//     <script
//       src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIwzALxUPNbatRBj3Xi1Uhp0fFzwWNBkE&callback=initMap&libraries=&v=weekly"
//       async
//     ></script>
//   </body>
// </html>