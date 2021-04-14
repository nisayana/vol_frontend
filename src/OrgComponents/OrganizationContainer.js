import React, { Component } from 'react'
import OrganizationCard from './OrganizationCard';
// import {Link} from 'react-router-dom'
import {connect, useSelector} from 'react-redux';
import {sortOrgs} from '../action_creators/organizations'

const OrganizationContainer = (props) => {
    console.log(sortOrgs)
    let {organizations} = useSelector(globalState => globalState.orgReducer)

    console.log(organizations)

    // const filterByCategory = (term) => {
    //     return organizations.filter(organization => {
    //         organization.category_id
    //     })
    // }

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