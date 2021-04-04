import React, { Component } from 'react'
import OrganizationCard from './OrganizationCard'
// import {Link} from 'react-router-dom'
import {connect, useSelector} from 'react-redux'

const OrganizationContainer = (props) => {
    // console.log(props.organizations)
    let {organizations} = useSelector(globalState => globalState.orgReducer)
    console.log(organizations)

    return(
        <div id="org-collection">
            {organizations.map(organization => (<OrganizationCard key={organization.id} organization={organization}/>))}
        </div>
    )
}


// let mapStateToProps = (globalState) => {
//     console.log(globalState)
//     return {
//         organizations: globalState.orgReducer.organizations
//     }
// }

export default OrganizationContainer;