import React, { Component } from 'react'
import OrganizationCard from './OrganizationCard'
// import {Link} from 'react-router-dom'
import {connect, useSelector} from 'react-redux'

const OrganizationContainer = (props) => {
    // console.log(props)
    let {organizations} = useSelector(globalState => globalState.orgReducer)

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