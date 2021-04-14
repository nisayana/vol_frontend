import React, { Component } from 'react'
import ListCard from './ListCard'
import {withRouter} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import NotFound from '../NotFound';
import MapContainer from './MapContainer';



const ListContainer = (props ) => {

    let {organizations} = useSelector(globalState => globalState.orgReducer)
    
    let givenUrl = props.match.params.id 

    let renderSpecificOrganization = (props) => {

        let foundOrganization = organizations.find((organizationPojo) => {
        return organizationPojo.id === parseInt(givenUrl)
        })
        if (foundOrganization) {
            let arrOfCoordinates = foundOrganization.lists.map((list) => {
                return {lng: list.lng, lat: list.lat}
            })
            return (
            <> 
            <ListCard lists={foundOrganization.lists} />
            <MapContainer coordinates={arrOfCoordinates} /> 
            </>)
        } else {
            return <NotFound />
        }
    }

    return (
        <div id="list-collection">
            {renderSpecificOrganization()}
        </div>
    )
}


// let mapStateToProps = (globalState) => {
//     console.log(globalState)
//     return {
//         organizations: globalState.organizations
//     }
// }

export default withRouter(ListContainer)