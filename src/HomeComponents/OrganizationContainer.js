import React, { Component } from 'react'
import OrganizationCard from './OrganizationCard'

class OrganizationContainer extends Component {
    render() {
        // console.log(this.props.organizations) 
        let arrayOfOrganizations = this.props.organizations.map((organizationObj) => {
            return <OrganizationCard organizationCard={organizationObj}/>
        })
        return (
            <div id="organization-collection">
                {arrayOfOrganizations}
            </div>
        )
    }
}

export default OrganizationContainer