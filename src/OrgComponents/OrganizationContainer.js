import React, { Component } from 'react'
import OrganizationCard from './OrganizationCard';
// import {Link} from 'react-router-dom'
import {connect, useSelector} from 'react-redux';
// import {filterOrgs} from '../action_creators/organizations'

const OrganizationContainer = (props) => {

    let {organizations} = useSelector(globalState => globalState.orgReducer)

    console.log(organizations)

    // const filterByCategory = (term) => {
        // 
    // }

    return(
        <div id="org-collection">
            {organizations.map(organization => (<OrganizationCard key={organization.id} organization={organization}/>))}
        </div>
    )
}

export default OrganizationContainer;