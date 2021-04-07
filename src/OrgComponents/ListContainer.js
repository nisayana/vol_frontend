import React, { Component } from 'react'
import ListCard from './ListCard'
import {withRouter} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import NotFound from '../NotFound';
import MapContainer from './MapContainer';


const ListContainer = (props ) => {

    let {organizations} = useSelector(globalState => globalState.orgReducer)
    console.log(organizations)
    
    let givenUrl = props.match.params.id 

    let renderSpecificOrganization = (props) => {
    // let givenUrl = props.match.params.id 
        let foundOrganization = organizations.find((organizationPojo) => {
        return organizationPojo.id === parseInt(givenUrl)
        })
        if (foundOrganization) {
            console.log(foundOrganization)
            return <ListCard lists={foundOrganization.lists} /> //addToMyList
            // return <MapContainer lists={foundOrganization.lists} /> 
        } else {
            return <NotFound />
        }
    }

  console.log(renderSpecificOrganization())

            
        // let arrayOfLists = this.props.organization.lists.map((list) => {
            // console.log(category)
        //     return <ListCard 
        //             key = {list.id}
        //             list = {list}
        //             addToMyLists = {this.props.addToMyLists}
        //             // organization_id ={organization.id}
        //             />
        // })
    return (
        <div id="list-collection">
            {renderSpecificOrganization()}
                {/* {organizations.map} */}
            {/* <h1>Hello from list container</h1> */}
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